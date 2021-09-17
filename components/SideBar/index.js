import { useState } from 'react' 

// Font Awesome


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
	const [SideBarIsOpen, setSideBarIsOpen] = useState(false)
	return ( 
		<div className={'fixed z-50 p-1 left-0 top-0 h-screen'}>
			<div className={` bg-black_ rounded-lg  h-full ${SideBarIsOpen ? 'w-48' : "w-12"} py-8 px-4 flex flex-col items-center justify-between space-y-16`}>
				<div className="flex flex-col items-center space-y-8">
					
					<div 
						className={' text-white  transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100'}
						onClick={() => setSideBarIsOpen(!SideBarIsOpen)}
					>
						{SideBarIsOpen ? <HiArrowLeft size={'2em'} /> : <HiArrowRight size={'2em'}/>}
					</div>

					<div className={'capitalize flex flex-col items-center w-full '}>
						<div className={'flex flex-col items-start space-y-4'}>
							
							<div className={'flex space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100  items-center'}>
								<HiHome size={'1.7em'}/>
								{SideBarIsOpen && <span>home</span>}
							</div>
							<div className={'flex space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
								<HiUser size={'1.7em'}/>
								{SideBarIsOpen && <span>profile</span>}
							</div>
							<div className={'flex space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
								<HiUsers size={'1.7em'}/>
								{SideBarIsOpen && <span>Friends</span>}
							</div>
						</div>
					</div>

				</div>

				<div className="flex flex-col items-center capitalize">
					<div className={'flex space-x-2 justify-center transition duration-200 cursor-pointer text-white text-opacity-80 hover:text-opacity-100 items-center'}>
						<HiAdjustments size={'1.7em'}/>
						{SideBarIsOpen && <span>settings</span>}
					</div>
				</div>

			</div>

		</div>
	)
}