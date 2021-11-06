import linkify from "react-tiny-linkify";

import { Divider } from "@chakra-ui/react";

// Components
import Images from "./Images";
import Reactions from "./Reactions";
import Head from "./Head";

export default function Post({
	AvatarImage,
	Username,
	Content,
	ShareDate,
	ImagesList = [],
	group,
	UserID,
}) {
	return (
		<div
			className={
				"w-full shadow text-xs sm:text-base flex space-y-2 flex-col items-center bg-white  p-3 rounded-xl"
			}>
			<Head
				Username={Username}
				ShareDate={ShareDate}
				AvatarImage={AvatarImage}
				UserID={UserID}
				group={group}
			/>

			<div className={"self-start  pl-4 py-3 flex justify-start items-center"}>
				<div className={"post-content"}>
					{Content?.split("\n")?.map((line, index) => (
						<span key={index}>
							{linkify(line)}
							<br />
						</span>
					))}
				</div>
			</div>

			<Images ImagesList={ImagesList} />
			<Divider />
			<Reactions />
		</div>
	);
}
