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

export default function PagesIcons( {IsSideBarOpen} ) {
	const { innerWidth } =  useWindowSize()


	return (
		<div className={'capitalize flex sm:flex-col justify-center items-center  w-full'}>
			<div className={`flex flex-row sm:flex-col justify-around items-center ${IsSideBarOpen && 'sm:items-start'} space-x-4 sm:space-x-0 sm:space-y-4 w-full sm:w-auto `}>


				<NavLink href={'/'} onActiveClassName={'w-10 sm:w-auto sm:h-16 justify-center items-center flex border-b-4 sm:border-b-0 sm:border-l-4 pb-2 sm:pb-0 sm:pl-2'}>
					<div className={'flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100  items-center'}>
						<HiHome size={'1.7em'}/>
						{(IsSideBarOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>home</span>}
						
					</div>
				</NavLink>


				<NavLink href={'/friends'} onActiveClassName={'w-10 sm:w-auto sm:h-16 justify-center items-center flex border-b-4 sm:border-b-0 sm:border-l-4 pb-2 sm:pb-0 sm:pl-2'}>
					
					<div className={'flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
						<HiUsers size={'1.7em'}/>
						{(IsSideBarOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>friends</span>}
					</div>
				</NavLink>

				<NavLink href={'/groups'} onActiveClassName={'w-10 sm:w-auto sm:h-16 justify-center items-center flex border-b-4 sm:border-b-0 sm:border-l-4 pb-2 sm:pb-0 sm:pl-2'}>
					<div className={'flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
						<HiUserGroup size={'1.7em'}/>
						{(IsSideBarOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>groups</span>}
					</div>
					
				</NavLink>

				<NavLink href={'/chat'} onActiveClassName={'w-10 sm:w-auto sm:h-16 justify-center items-center flex border-b-4 sm:border-b-0 sm:border-l-4 pb-2 sm:pb-0 sm:pl-2'}>
					<div className={'flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
						<HiAnnotation size={'1.7em'}/>
						{(IsSideBarOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>chat</span>}
					</div>
				</NavLink>


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