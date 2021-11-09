// Components
import { Button } from "@chakra-ui/react";
import Post from "../components/Post";
import Search from "../components/Search";

import { HiUserAdd } from "react-icons/hi";

// Lottie Component (For Animated Icons)
import Lottie from "react-lottie";
import * as Friends from "../assets/animated-icons/demand-outline.json";
import { GetNewToken } from "../Auth";
import axios from "axios";

export default function Home({ posts, error }) {
	console.log(posts);
	return (
		<div className={"w-full "}>
			<div
				className={
					"w-full p-1 md:p-0 pb-4 md:pb-8 flex flex-col mt-4 md:mt-0 space-y-3 items-center "
				}>
				{posts?.length > 0 && typeof posts !== "undefined" ? (
					<>
						{" "}
						{posts?.map((post, index) => (
							<Post
								key={index}
								author={post?.author}
								content={post?.content}
								publishedDate={post?.DatePublished}
								images={post?.images || null}
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
								animationData: Friends,
							}}
							height={250}
							width={250}
						/>
						<div>No posts is found</div>
						<Search
							taps='users'
							Component={
								<Button
									colorScheme='blue'
									leftIcon={<HiUserAdd size='1.4em' />}>
									Add Some Friends
								</Button>
							}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export async function getServerSideProps({ req, res }) {
	try {
		const tokens = JSON.parse(req.cookies.token);
		await GetNewToken(tokens.refresh, tokens, res); // Set New Token

		const config = {
			headers: {
				Authorization: `Bearer ${tokens.access}`,
			},
		};
		const data = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
			config,
		);

		// test request
		console.log("data", data);

		return {
			props: {
				posts: data.data || [],
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
