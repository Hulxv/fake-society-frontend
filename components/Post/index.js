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
	author,
	content,
	publishedDate,
	images = [],
	group,
	counters = {},
	checkers = {},
}) {
	const [wordsCount, setwordsCount] = useState(content.split(" ").length);
	const [showMore, setShowMore] = useState(false);
	useEffect(() => console.log(wordsCount), []);
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
				<Collapse
					startingHeight={40}
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
				{!showMore && wordsCount > 50 && "..."}
				{wordsCount > 50 && (
					<Button
						size='xs'
						alignSelf='end'
						justifySelf='end'
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
