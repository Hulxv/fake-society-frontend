import { useRouter } from "next/router";

import { IconButton } from "@chakra-ui/react";

// Icons

import { HiSearch } from "react-icons/hi";

// Components
import Notifications from "./Notifications";
import Search from "../Search";
import UserMenu from "./UserMenu";
// Fake Data for testing

export default function Header() {
	return (
		<div
			className={
				"flex justify-center w-screen top-0 left-0 p-1  items-center fixed z-20"
			}>
			<div
				className={
					"px-5 shadow sm:px-14 py-2 rounded-xl bg-black_ w-full flex  items-center "
				}>
				<div className={"flex items-center justify-between w-full text-white"}>
					<Search
						Component={
							<IconButton icon={<HiSearch size={"1.5em"} />} variant={"none"} />
						}
					/>

					<div
						className={"sm:text-xl font-azeret-mono underline cursor-pointer"}
						onClick={() => Router.push("/")}>
						Fake Society
					</div>
					<div className={"flex items-center space-x-3 "}>
						<Notifications />

						<UserMenu />
					</div>
				</div>
			</div>
		</div>
	);
}
