import { Button } from "@chakra-ui/react";
import { useAuth } from "../../Auth";
import { HiRefresh } from "react-icons/hi";

import Post from "../Post";
import router from "next/router";

export default function Posts({ posts }) {
	return (
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
						"capitalize   h-100  flex items-center flex-col justify-center space-y-3"
					}>
					<div>No posts is found</div>
					<Button
						colorScheme='blue'
						leftIcon={<HiRefresh />}
						onClick={() => router.replace(router.asPath)}>
						Refresh
					</Button>
				</div>
			)}
		</div>
	);
}
