import {
	Menu,
	MenuButton,
	Avatar,
	MenuList,
	MenuItem,
	MenuDivider,
	Button,
} from "@chakra-ui/react";
import router from "next/router";
import { useAuth } from "../../Auth";

import { HiUser, HiLogout } from "react-icons/hi";

// Fake Data for testing
import { posts } from "../../data/posts";

function UserMenu() {
	const { user, signout } = useAuth();

	if (user === null)
		return (
			<Button colorScheme='blue' onClick={() => router.push("/auth/sign-up")}>
				Sign Up
			</Button>
		);

	return (
		<div className={"text-black"}>
			<Menu>
				<MenuButton>
					<Avatar
						name={user?.name}
						src={`${process.env.NEXT_PUBLIC_API_URL}${user?.avatar}`}
					/>
				</MenuButton>
				<MenuList>
					<MenuItem height={50} className='flex space-x-2 items-center '>
						<HiUser size={"1.5em"} />
						<span>Profile</span>
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
					<MenuItem
						height={50}
						className='flex space-x-2 items-center'
						onClick={() => {
							signout();
							router.push("/auth/sign-up");
						}}>
						<HiLogout size={"1.5em"} />
						<span>Sign Out</span>
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
}

export default UserMenu;
