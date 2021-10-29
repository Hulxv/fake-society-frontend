import { BiShare, BiComment } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import * as Heart from "../../assets/animated-icons/HeartIcon.json";

import Lottie from "react-lottie";
import { useState } from "react";

export default function Footer() {
	const [loved, setLoved] = useState(false);
	return (
		<div
			className={
				"w-full flex justify-evenly capitalize text-sm sm:text-base pt-2"
			}>
			<div
				className={
					"flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-xl bg-opacity-0 bg-black hover:bg-opacity-10"
				}
				onClick={() => setLoved(!loved)}>
				{!loved ? (
					<AiOutlineHeart size={"1.4em"} />
				) : (
					<AiFillHeart size={"1.4em"} />
				)}
				<span className={"outline-none select-none"}>
					{" "}
					{!loved ? "love" : "loved"}
				</span>
			</div>
			<div
				className={
					"flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-xl bg-opacity-0 bg-black hover:bg-opacity-10"
				}>
				<BiComment size={"1.4em"} />
				<span className={"outline-none select-none"}> comment </span>
			</div>
			<div
				className={
					"flex space-x-2 items-center cursor-pointer transition duration-200 p-2 px-4  rounded-xl bg-opacity-0 bg-black hover:bg-opacity-10"
				}>
				<BiShare size={"1.4em"} />
				<span className={"outline-none select-none"}> share </span>
			</div>
		</div>
	);
}
