import linkify from "react-tiny-linkify";

import { Divider } from "@chakra-ui/react";

// Components
import Images from "./Images";
import Footer from "./Footer";
import Head from "./Head";

export default function Post({
	author,
	content,
	publishedDate,
	images = [],
	group,
	counters = {},
	checkers = {},
}) {
	return (
		<div
			className={
				"w-full shadow text-xs sm:text-base flex space-y-2 flex-col items-center bg-white  p-3 rounded-xl"
			}>
			<Head
				author={author}
				publishedDate={publishedDate}
				group={group}
				isOwnedByUser={checkers?.owendByUser}
			/>

			<div className={"self-start  pl-4 py-3 flex justify-start items-center"}>
				<div className={"post-content"}>
					{content?.split("\n")?.map((line, index) => (
						<span key={index}>
							{linkify(line)}
							<br />
						</span>
					))}
				</div>
			</div>

			<Images images={images} />
			<Divider />
			<Footer checkers={checkers} counters={counters} />
		</div>
	);
}
