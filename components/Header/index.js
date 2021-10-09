import { useRouter } from "next/router";
import {
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	MenuDivider,
	Avatar,
} from "@chakra-ui/react";

// Icons
import { GrNotification, GrAdd, GrSearch } from "react-icons/gr";

import {
	HiOutlineMenu,
	HiSearch,
	HiOutlineBell,
	HiUser,
	HiLogout,
} from "react-icons/hi";

// Components
import Notifications from "./Notifications";
import Search from "../Search";
// Data
import { posts } from "../../data/posts";

export default function Header() {
	const Router = useRouter();

	return (
		<div
			className={
				"flex justify-center w-screen top-0 left-0 p-1 pr-3 items-center fixed z-20"
			}>
			<div
				className={
					"px-5 shadow sm:px-14 py-2 rounded-xl bg-black_ w-full flex  items-center "
				}>
				<div className={"flex items-center justify-between w-full text-white"}>
					<Search 
						Component={
      						<IconButton icon={<HiSearch size={'1.5em'}/>} variant={'none'} />
						}
					/>
					
					<div
						className={"sm:text-xl font-azeret-mono underline cursor-pointer"}
						onClick={() => Router.push("/")}>
						Fake Society
					</div>
					<div className={"flex items-center space-x-3 "}>
						<Notifications />

						<div className={"text-black"}>
							<Menu>
								<MenuButton>
									<Avatar
										name='Oshigaki Kisame'
										src={
											typeof window !== "undefined" &&
											window.localStorage.getItem("fake-society-avatar")
										}
									/>
								</MenuButton>
								<MenuList>
									<MenuItem height={50}>
										<div className='flex space-x-2 items-center '>
											<HiUser size={"1.5em"} />
											<span>Profile</span>
										</div>
									</MenuItem>
									<MenuDivider />
									<h1 className={"pl-3 text-sm"}>Switch to</h1>
									{posts.map(
										(profile, index) =>
											index < 3 && (
												<MenuItem key={index}>
													<Avatar
														size={"md"}
														name={profile.name}
														src={profile.avatar}
													/>
													<h1 className='text-sm ml-2'>{profile.username}</h1>
												</MenuItem>
											),
									)}
									<MenuDivider />
									<MenuItem height={50}>
										<div className='flex space-x-2 items-center'>
											<HiLogout size={"1.5em"} />
											<span>Sign Out</span>
										</div>
									</MenuItem>
								</MenuList>
							</Menu>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
