import { useState, useEffect } from 'react' 
import {useWindowSize} from "rooks";

import PagesIcons from './PagesIcons'
import Settings from '../Settings'


// Icons
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

import {
	IconButton 
} from '@chakra-ui/react'

export default function SideBar() {
	const { innerWidth } =  useWindowSize()
	const [SideBarIsOpen, setSideBarIsOpen] = useState(false)
	useEffect(() => innerWidth < 640 && setSideBarIsOpen(false), [innerWidth] )
	return ( 
		<div className={'fixed z-50 p-1 left-0 bottom-0 sm:top-0 w-full sm:w-auto sm:h-screen'}>

			<div className={` bg-black_ rounded-lg w-full sm:h-full ${SideBarIsOpen ? 'sm:w-48' : "sm:w-12"} py-4 sm:py-8  flex flex-row sm:flex-col items-center justify-between `}>
				<div className="flex sm:flex-col justify-center items-center space-x-4 sm:space-x-0 sm:space-y-8 w-full">
					
					{
						innerWidth >= 640 &&
						<IconButton 
							icon={
								SideBarIsOpen ? <HiArrowLeft size={'2em'} color={'white'}/> 
											  : <HiArrowRight size={'2em'} color={'white'}/>
							}
							// variant='ghost'
							colorScheme="white"
							onClick={ () => setSideBarIsOpen(!SideBarIsOpen) }
						/>
					
					}

					<PagesIcons IsSideBarOpen={SideBarIsOpen}/> 

				</div>
				{
					innerWidth >= 640 &&
					<Settings IsSideBarOpen={SideBarIsOpen}/>
				}

			</div>

		</div>
	)
}