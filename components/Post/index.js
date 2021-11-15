import linkify from "react-tiny-linkify";
import Emojify from "react-emojione";

import { Divider, Collapse, Button } from "@chakra-ui/react";

// Components
import Images from "./Images";
import Footer from "./Footer";
import Head from "./Head";
import { useEffect, useState } from "react";

export default function Post({
	postID,
	author = { name: "", avatar: "" },
	content = "",
	publishedDate = new Date(),
	images = [],
	group,
	counters = {},
	checkers = {},
}) {
	const [linesCount, setLinesCount] = useState(content.split("\n").length);
	const [showMore, setShowMore] = useState(false);
	useEffect(() => console.log(linesCount), []);
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
				postID={postID}
			/>

			<div className={"pl-4 py-3 flex flex-col w-full"}>
				{!showMore && (
					<div className={`post-content text-xs sm:text-sm md:text-base`}>
						<Emojify style={{ width: 20, height: 20 }}>
							{content
								?.slice(0, showMore ? content?.length : 100)
								?.concat(!showMore && content?.length > 100 ? "..." : "")
								?.split("\n")
								?.map((line, index) => (
									<span key={index}>
										{linkify(line)}
										<br />
									</span>
								))}
						</Emojify>
					</div>
				)}
				<Collapse
					in={showMore}
					className={`post-content text-xs sm:text-sm md:text-base`}>
					<Emojify style={{ width: 20, height: 20 }}>
						{content?.split("\n")?.map((line, index) => (
							<span key={index}>
								{linkify(line)}
								<br />
							</span>
						))}
					</Emojify>
				</Collapse>

				{content?.length > 20 && (
					<Button
						size='xs'
						alignSelf='end'
						variant='ghost'
						mt={1}
						textTransform='capitalize'
						onClick={() => setShowMore(!showMore)}>
						See {showMore ? "less" : "more"}
					</Button>
				)}
			</div>

			<Images images={images} />
			<Divider />
			<Footer checkers={checkers} counters={counters} />
		</div>
	);
}
