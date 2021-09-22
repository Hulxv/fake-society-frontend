import {
	Input,
	InputGroup,
	InputRightElement,
	Button,
	IconButton,
	Avatar,
} from '@chakra-ui/react'
import {
	GrNotification,
	GrAdd,
	GrSearch

} from 'react-icons/gr'

import {
	HiOutlineMenu,
	HiSearch,
	HiOutlineBell
} from 'react-icons/hi'
export default function Header() {
	
	return (
		<div className={'flex justify-center w-screen top-0 left-0 p-1 pr-3 items-center fixed z-20'}>
			
			<div className={'px-5 shadow sm:px-14 py-2 rounded-xl bg-black_ w-full flex  items-center '}>
				
				<div className={'flex items-center justify-between w-full text-white'}>
					
					
					<div className={'bg-white flex items-center justify-center transition duration-100 w-10 h-10 p-2 rounded-xl cursor-pointer bg-opacity-0 hover:bg-opacity-20'}>
						<HiSearch size={'1.2em'}/>
					</div>
					<div className={'text-xl font-azeret-mono '}>
						Fake Society
					</div>	
					<div className={'flex items-center space-x-3 '}>
						<div className={'bg-white flex items-center justify-center transition duration-100 w-10 h-10 p-2 rounded-xl cursor-pointer bg-opacity-0 hover:bg-opacity-20'}>
							<HiOutlineBell size={'1.5em'}/>
						</div>
						<Avatar name="Oshigaki Kisame" src="https://pbs.twimg.com/profile_images/776714243173474304/ByDDFCvI_400x400.jpg" />
					</div>
				</div>

			</div>

			
		</div>
	)
}