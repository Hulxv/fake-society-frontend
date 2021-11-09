import axios from "axios";
import Error from "../_error";
import { GetNewToken } from "../../Auth";

import Zoom from "react-medium-image-zoom";
import {
	Avatar,
	Img,
	Button,
	IconButton,
	useBreakpointValue,
} from "@chakra-ui/react";
import Post from "../../components/Post";

import { HiUserAdd, HiOutlineChatAlt2 } from "react-icons/hi";

// Lottie Component (For Animated Icons)
import Lottie from "react-lottie";
import * as Globe from "../../assets/animated-icons/globe.json";

export default function Profile({ profile, error, posts }) {
	const responsiveCmp = useBreakpointValue({
		xs: "xs",
		sm: "sm",
		md: "md",
	});

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
			<div className='relative w-full bg-white items-center flex flex-col  p-4 rounded-lg shadow-md space-y-4'>
				<div className='w-full'>
					<Zoom wrapStyle={{ width: "100%" }}>
						<Img
							src={`${process.env.NEXT_PUBLIC_API_URL}${profile.cover}`}
							alt=''
							className={" rounded-xl w-full   "}
						/>
					</Zoom>
				</div>
				<div className='flex items-center justify-between w-full '>
					<div className='flex  items-center space-x-3'>
						<Avatar
							size={responsiveCmp}
							src={`${process.env.NEXT_PUBLIC_API_URL}${profile.avatar}`}
							alt=''
						/>
						<div className='text-sm sm:text-xl '>{profile.name}</div>
					</div>
					<div className='space-x-3 flex'>
						<IconButton
							icon={<HiOutlineChatAlt2 size='1.4em' />}
							variant='ghost'
							size={responsiveCmp}
						/>
						<Button
							colorScheme='blue'
							size={responsiveCmp}
							leftIcon={<HiUserAdd />}>
							Add Friend
						</Button>
					</div>
				</div>
				<div className=' flex flex-col items-start'>
					{profile?.bio?.split("\n").map((line, index) => (
						<span key={index}>{line}</span>
					))}
				</div>
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
								author={post.author}
								content={post.content}
								publishedDate={post.DatePublished}
								images={post.images || []}
								counters={{
									reactions: post.ReactsCounter,
									comments: post.CommentsCounter,
									shares: post.SharesCounter,
								}}
								checkers={{
									reactions: post.checking_reactions,
									shares: posts.checking_shares,
									owendByUser: post.checking_per,
								}}
							/>
						))}
						<div className={"capitalize"}>No more posts</div>
						{posts.length > 3 && (
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
						)}
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
		// console.log("data", data.data.posts);
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
