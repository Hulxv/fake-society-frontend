import { useState, useEffect } from 'react' 
import {useWindowSize} from "rooks";

// Icons
import { 
	HiArrowRight,
	HiArrowLeft,
	HiMenuAlt2,
	HiUsers,
	HiUser,
	HiHome,
	HiAdjustments,
	HiAnnotation,
	HiOutlineMenu,
} from "react-icons/hi";


export default function SideBar() {
	const { innerWidth } =  useWindowSize()
	const [SideBarIsOpen, setSideBarIsOpen] = useState(false)
	useEffect(() => innerWidth < 640 && setSideBarIsOpen(false), [innerWidth] )
	return ( 
		<div className={'fixed z-50 p-1 left-0 bottom-0 sm:top-0 w-full sm:w-auto sm:h-screen'}>

			<div className={` bg-black_ rounded-lg w-full sm:h-full ${SideBarIsOpen ? 'sm:w-48' : "sm:w-12"} py-4 sm:py-8 px-4 flex flex-row sm:flex-col items-center justify-between `}>
				<div className="flex sm:flex-col justify-center items-center space-x-4 sm:space-x-0 sm:space-y-8 w-full">
					
					{innerWidth >= 640 &&
						<div 
						className={' text-white transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100'}
						onClick={() => setSideBarIsOpen(!SideBarIsOpen)}
					 >
						{SideBarIsOpen ? <HiArrowLeft size={'2em'} /> : <HiArrowRight size={'2em'}/>}
					</div>}

					<div className={'capitalize flex sm:flex-col justify-center items-center  w-full'}>
						<div className={'flex flex-row sm:flex-col justify-around items-center sm:items-start space-x-4 sm:space-x-0 sm:space-y-4 w-full sm:w-auto'}>
							
							<div className={'flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100  items-center'}>
								<HiHome size={'1.7em'}/>
								{(SideBarIsOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>home</span>}
								
							</div>
							<div className={'flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
								<HiUser size={'1.7em'}/>
								{(SideBarIsOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>profile</span>}
							</div>
							<div className={'flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
								<HiUsers size={'1.7em'}/>
								{(SideBarIsOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>friends</span>}
							</div>
							<div className={'flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
								<HiAnnotation size={'1.7em'}/>
								{(SideBarIsOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>chat</span>}
							</div>
							{innerWidth < 640 && <div className={'flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
								<HiOutlineMenu size={'1.7em'}/>
								{(SideBarIsOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>more</span>}
							</div>}
						</div>
					</div>

				</div>

				{innerWidth >= 640 && <div className="flex  flex-row sm:flex-col  items-center capitalize">
					<div className={'flex flex flex-col sm:flex-row sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
						<HiAdjustments size={'1.7em'}/>
						{(SideBarIsOpen || innerWidth < 640)  && <span className={'text-xs sm:text-base'}>settings</span>}
					</div>
				</div>}

			</div>

		</div>
	)
}