import { useWindowSize } from "rooks";

// Components
import NavLink from "../NavLink";
import Settings from "../Settings";
import AddNewPost from "../AddNewPost";

import {
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Tooltip,
} from "@chakra-ui/react";
import {
	HiUserGroup,
	HiUsers,
	HiHome,
	HiPlus,
	HiAnnotation,
	HiOutlineMenu,
} from "react-icons/hi";

const Links = [
	{
		title: "home",
		icon: <HiHome size='1.7em' />,
		path: "/",
	},
	{
		title: "friends",
		icon: <HiUsers size='1.7em' />,
		path: "/friends",
	},
	{
		title: "groups",
		icon: <HiUserGroup size='1.7em' />,
		path: "/groups",
	},
	{
		title: "chat",
		icon: <HiAnnotation size='1.7em' />,
		path: "/chat",
	},
];

export default function PagesIcons({ IsSideBarOpen }) {
	const { innerWidth } = useWindowSize();

	return (
		<div
			className={
				"capitalize flex sm:flex-col justify-center items-start sm:items-center w-full"
			}>
			<div
				className={`flex flex-row sm:flex-col justify-around items-start  sm:space-y-4 w-full `}>
				{Links.map((link, index) => (
					<NavLink
						key={index}
						href={link.path}
						onActiveClassName={`w-10 sm:w-auto sm:h-16 justify-center items-center flex border-b-4 sm:border-b-0 sm:border-l-4  pb-2 sm:pb-0 ${
							IsSideBarOpen ? "sm:pl-8" : "sm:pl-2"
						} sm:my-2`}
						onNotActiveClassName={`sm:border-transparent sm:border-b-0 sm:border-l-4 pb-2 sm:pb-0 ${
							IsSideBarOpen ? "sm:pl-8" : "sm:pl-2"
						} `}>
						<Tooltip
							label={!IsSideBarOpen ? link.title : ""}
							textTransform='capitalize'
							placement='right'
							hasArrow>
							<div
								className={
									"flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2  transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center w-full "
								}>
								{link.icon}
								{(IsSideBarOpen || innerWidth < 640) && (
									<span className={"text-xs sm:text-base"}>{link.title}</span>
								)}
							</div>
						</Tooltip>
					</NavLink>
				))}

				{innerWidth < 640 && (
					<Menu colorScheme={"blue"}>
						<MenuButton as='div'>
							<div
								className={
									" flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2  transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center w-full "
								}>
								<HiOutlineMenu size={"1.7em"} />
								<span className={"text-xs sm:text-base"}>More</span>
							</div>
						</MenuButton>

						<MenuList>
							<MenuItem>
								<AddNewPost
									component={
										<div className='flex flex-row sm:flex-col w-full items-center capitalize'>
											<div
												className={`flex flex-row space-x-2 justify-center transition duration-200 cursor-pointer 
													text-black
												text-opacity-80 hover:text-opacity-100 items-center`}>
												<HiPlus size={"2em"} />
												{(IsSideBarOpen || innerWidth < 640) && (
													<span className={"text-xs sm:text-base"}>
														New Post
													</span>
												)}
											</div>
										</div>
									}
								/>
							</MenuItem>
							<MenuItem>
								<Settings color={"black"} />
							</MenuItem>
						</MenuList>
					</Menu>
				)}
			</div>
		</div>
	);
}
