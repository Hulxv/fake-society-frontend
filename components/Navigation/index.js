import { useState } from 'react' 
import { useWindowSize } from '@artifak/usewindowsize';

// Icons
import { 
	HiArrowRight,
	HiArrowLeft,
	HiMenuAlt2,
	HiUsers,
	HiUser,
	HiHome,
	HiAdjustments,
} from "react-icons/hi";


export default function SideBar() {
	const WindowSize = typeof window !== 'undefined' ? useWindowSize() : { innerWidth: 0} 
	const [SideBarIsOpen, setSideBarIsOpen] = useState(false)
	return ( 
		<div className={'fixed z-50 p-1 left-0 bottom-0 sm:top-0 w-full sm:w-auto sm:h-screen'}>

			<div className={` bg-black_ rounded-lg w-full sm:h-full ${SideBarIsOpen ? 'sm:w-48' : "sm:w-12"} py-4 sm:py-8 px-4 flex flex-row sm:flex-col items-center justify-between `}>
				<div className="flex sm:flex-col justify-center items-center space-x-4 sm:space-x-0 sm:space-y-8">
					
					{WindowSize.innerWidth >= 640 &&
						<div 
						className={' text-white transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100'}
						onClick={() => setSideBarIsOpen(!SideBarIsOpen)}
					 >
						{SideBarIsOpen ? <HiArrowLeft size={'2em'} /> : <HiArrowRight size={'2em'}/>}
					</div>}

					<div className={'capitalize flex sm:flex-col  justify-center items-center w-full '}>
						<div className={'flex flex-row sm:flex-col justify-center items-center sm:items-start space-x-4 sm:space-x-0 sm:space-y-4'}>
							
							<div className={'flex space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100  items-center'}>
								<HiHome size={'1.7em'}/>
								{(SideBarIsOpen || WindowSize.innerWidth < 640) && <span>home</span>}
								
							</div>
							<div className={'flex space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
								<HiUser size={'1.7em'}/>
								{(SideBarIsOpen || WindowSize.innerWidth < 640) && <span>profile</span>}
							</div>
							<div className={'flex space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
								<HiUsers size={'1.7em'}/>
								{(SideBarIsOpen || WindowSize.innerWidth < 640) && <span>Friends</span>}
							</div>
						</div>
					</div>

				</div>

				<div className="flex  flex-row sm:flex-col  items-center capitalize">
					<div className={'flex sm:space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
						<HiAdjustments size={'1.7em'}/>
						{SideBarIsOpen && <span>settings</span>}
					</div>
				</div>

			</div>

		</div>
	)
}