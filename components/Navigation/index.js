import { useState, useEffect } from "react";
import { useWindowSize } from "rooks";

import NavLinks from "./NavLinks";
import Settings from "../Settings";
import AddNewPost from "../AddNewPost";

// Icons
import { HiArrowRight, HiArrowLeft, HiPlus } from "react-icons/hi";

import { IconButton, Tooltip } from "@chakra-ui/react";

export default function SideBar() {
	const { innerWidth } = useWindowSize();
	const [SideBarIsOpen, setSideBarIsOpen] = useState(false);
	useEffect(() => innerWidth < 640 && setSideBarIsOpen(false), [innerWidth]);
	return (
		<div
			className={
				"fixed z-50 p-1 left-0 bottom-0 sm:top-0 w-full sm:w-auto sm:h-screen"
			}>
			<div
				className={` bg-black_ rounded-lg w-full sm:h-full ${
					SideBarIsOpen ? "sm:w-40" : "sm:w-12"
				} pt-2 sm:py-8  flex flex-row sm:flex-col items-center justify-between `}>
				<div className='flex sm:flex-col justify-center items-center space-x-4 sm:space-x-0 sm:space-y-8 w-full'>
					{innerWidth >= 640 && (
						<IconButton
							icon={
								SideBarIsOpen ? (
									<HiArrowLeft size={"2em"} color={"white"} />
								) : (
									<HiArrowRight size={"2em"} color={"white"} />
								)
							}
							// variant='ghost'
							colorScheme='white'
							onClick={() => setSideBarIsOpen(!SideBarIsOpen)}
						/>
					)}

					<NavLinks IsSideBarOpen={SideBarIsOpen} />
				</div>
				{innerWidth >= 640 && (
					<div className='flex flex-col w-full items-start space-y-3'>
						<AddNewPost
							component={
								<Tooltip
									label={!SideBarIsOpen ? "New Post" : ""}
									placement='right'
									hasArrow>
									<div className='flex flex-row sm:flex-col w-full items-center capitalize'>
										<div
											className={`flex flex-row  justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center`}>
											<HiPlus size={"2em"} />
											{(SideBarIsOpen || innerWidth < 640) && (
												<span className={"text-xs sm:text-base"}>New Post</span>
											)}
										</div>
									</div>
								</Tooltip>
							}
						/>
						<Tooltip label='Settings'>
							<Settings IsSideBarOpen={SideBarIsOpen} />
						</Tooltip>
					</div>
				)}
			</div>
		</div>
	);
}
