import { useState, useEffect } from 'react' 
import {useWindowSize} from "rooks";

// Components
import NavLink from '../NavLink'
import Settings from '../Settings'

import {
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react'
import { 
	HiArrowRight,
	HiArrowLeft,
	HiMenuAlt2,
	HiUserGroup,
	HiUsers,
	HiHome,
	HiAdjustments,
	HiAnnotation,
	HiOutlineMenu,
} from "react-icons/hi";

const Links = [
	{
		"title":"home",
		"icon": <HiHome size='1.7em'/>,
		"path": "/"
	},
	{
		"title":"friends",
		"icon": <HiUsers size='1.7em'/>,
		"path": "/friends"
	}, 
	{
		"title":"groups",
		"icon": <HiUserGroup size='1.7em'/>,
		"path": "/groups"
	},
	{
		"title":"chat",
		"icon": <HiAnnotation size='1.7em'/>,
		"path": "/chat"
	},

]


export default function PagesIcons( {IsSideBarOpen} ) {
	const { innerWidth } =  useWindowSize()


	return (
		<div className={'capitalize flex sm:flex-col justify-center items-center w-full'}>
			<div className={`flex flex-row sm:flex-col justify-around items-center sm:items-start  sm:space-y-4 w-full `}>

				{
					Links.map((link,index) =>(
						<NavLink 	
							key={index} 
							href={link.path} 
							onActiveClassName={`w-10 sm:w-auto sm:h-16 justify-center items-center flex border-b-4 sm:border-b-0 sm:border-l-4 pb-2 sm:pb-0 ${IsSideBarOpen ? "sm:pl-10" : "sm:pl-2"} sm:my-2`}
							onNotActiveClassName={`sm:border-transparent sm:border-b-0 sm:border-l-4 pb-2 sm:pb-0 ${IsSideBarOpen ? "sm:pl-10" : "sm:pl-2"} `}
						>
								
								<div className={'flex flex-col sm:flex-row sm:space-x-2 transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center w-full '}>
									{link.icon}
									{(IsSideBarOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>{link.title}</span>}
								</div>
							
						</NavLink>
					))
				}

				{
					innerWidth < 640 &&
					<Menu colorScheme={'blue'}>
						<MenuButton >
							<div className={'flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
								<HiOutlineMenu size={'1.7em'}/>
								{(IsSideBarOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>More</span>}
							</div>
						</MenuButton>

						<MenuList>
							<MenuItem>
								<Settings color={'black'}/>
							</MenuItem>	
						</MenuList>	
					</Menu>	 
				}
			</div>
		</div>

	)
}