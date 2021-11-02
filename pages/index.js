import App from "./_app";

// Components
import { Button } from "@chakra-ui/react";
import { HiUserAdd } from "react-icons/hi";
import Search from "../components/Search";

import Post from "../components/Post";

// Lottie Component (For Animated Icons)
import Lottie from "react-lottie";
import * as Friends from "../assets/animated-icons/demand-outline.json";

export default function Home({ posts }) {
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
								Username={post.username}
								AvatarImage={post.avatar}
								Content={post.content}
								ShareDate={post.date}
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
							"capitalize    flex items-center flex-col justify-center space-y-3"
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
	return {
		props: {
			posts: [],
		},
	};
}
