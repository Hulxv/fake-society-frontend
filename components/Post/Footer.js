import Comments from "./Comment";

import { BiShare, BiComment } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import * as Heart from "../../assets/animated-icons/HeartIcon.json";

import Lottie from "react-lottie";
import { useState } from "react";
import { Button, useBreakpointValue } from "@chakra-ui/react";

export default function Footer({ counters, checkers }) {
	const [loved, setLoved] = useState(checkers.reaction ?? false);
	const ButtonSize = useBreakpointValue({
		xs: "xs",
		sm: "xs",
		md: "md",
	});
	return (
		<div
			className={
				"w-full flex justify-between capitalize text-sm sm:text-base pt-2 pl-2 pr-6"
			}>
			<div className='flex'>
				<Button
					size={ButtonSize}
					leftIcon={
						!loved ? (
							<AiOutlineHeart size={"1.4em"} />
						) : (
							<AiFillHeart size={"1.4em"} />
						)
					}
					variant='ghost'
					onClick={() => setLoved(!loved)}>
					<span>{counters?.reactions}</span>
				</Button>
				<Comments>
					<Button
						size={ButtonSize}
						leftIcon={<BiComment size={"1.4em"} />}
						variant='ghost'>
						<span>{counters?.comments}</span>
					</Button>
				</Comments>
			</div>
			<Button
				size={ButtonSize}
				leftIcon={<BiShare size={"1.4em"} />}
				variant='ghost'>
				<span>{counters?.shares}</span>
			</Button>
		</div>
	);
}
