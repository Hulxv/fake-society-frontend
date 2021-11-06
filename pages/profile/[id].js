import axios from "axios";
import Error from "../_error";
import { GetNewToken } from "../../Auth";

import Zoom from "react-medium-image-zoom";
import { Avatar, Img, Button } from "@chakra-ui/react";
import Post from "../../components/Post";

// Lottie Component (For Animated Icons)
import Lottie from "react-lottie";
import * as Globe from "../../assets/animated-icons/globe.json";

export default function Profile({ profile, error, posts }) {
	// console.log(posts);
	if (error)
		return (
			<Error
				errMessage={error?.detail}
				errCode={error?.code}
				statusCode={error?.statusCode}
			/>
		);

	return (
		<div className='flex flex-col items-center space-y-5'>
			<div className='relative w-full bg-white items-center flex flex-col py-8 px-4 rounded-lg shadow-md'>
				<div className='w-full'>
					<Zoom wrapStyle={{ width: "100%" }}>
						<Img
							src={`${process.env.NEXT_PUBLIC_API_URL}${profile.cover}`}
							alt=''
							className={" rounded-xl w-full   "}
						/>
					</Zoom>
				</div>
				<div className='flex items-center space-x-3 self-start m-1'>
					<Avatar
						size='md'
						src={`${process.env.NEXT_PUBLIC_API_URL}${profile.avatar}`}
						alt=''
					/>
					<div className='text-xl'>{profile.name}</div>
				</div>
				<div>{profile.bio}</div>
			</div>

			{/* User Posts */}
			<div
				className={
					"w-full p-1 md:p-0 pb-4 md:pb-8 flex flex-col mt-4 md:mt-0 space-y-3 items-center "
				}>
				{posts?.length > 0 && typeof posts !== "undefined" ? (
					<>
						{" "}
						{posts?.map((post) => (
							<Post
								key={post.id}
								UserID={[post.author.id]}
								Username={post.author.name}
								AvatarImage={`${process.env.NEXT_PUBLIC_API_URL}${post.author.avatar}`}
								Content={post.content}
								ShareDate={post.DatePublished}
								ImagesList={post.images || null}
							/>
						))}
						<div className={"capitalize"}>No more posts</div>
						<Button
							colorScheme={"blue"}
							onClick={() =>
								window.scroll({
									top: 100,
									left: 100,
									behavior: "smooth",
								})
							}>
							Back To Top
						</Button>
					</>
				) : (
					<div
						className={
							"capitalize flex items-center flex-col justify-center space-y-3"
						}>
						<Lottie
							options={{
								animationData: Globe,
							}}
							height={250}
							width={250}
						/>
						<div>No posts is found</div>
					</div>
				)}
			</div>
		</div>
	);
}

export async function getServerSideProps({ req, res, query }) {
	try {
		const tokens = JSON.parse(req.cookies.token);
		await GetNewToken(tokens.refresh, tokens, res); // Set New Token

		const config = {
			headers: {
				Authorization: `Bearer ${tokens.access}`,
			},
		};
		const data = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/profile/${query.id}`,
			config,
		);

		// test request
		// console.log("data", data);
		if (!data.data) {
			return {
				notFound: true,
			};
		}

		return {
			props: {
				profile: data.data.profile,
				posts: data.data.posts,
			},
		};
	} catch (err) {
		console.log("err", err?.response);
		return {
			props: {
				error: {
					...err?.response?.data,
					statusCode: err?.response?.status ?? 500,
				},
			},
		};
	}
}
