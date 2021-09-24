import {
	
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
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
	HiOutlineBell,
	HiUser,
	HiLogout
} from 'react-icons/hi'
import { posts } from '../../../data/posts'
export default function Header() {
	
	return (
		<div className={'flex justify-center w-screen top-0 left-0 p-1 pr-3 items-center fixed z-20'}>
			
			<div className={'px-5 shadow sm:px-14 py-2 rounded-xl bg-black_ w-full flex  items-center '}>
				
				<div className={'flex items-center justify-between w-full text-white'}>
					
					
					<div className={'bg-white flex items-center justify-center transition duration-100 w-10 h-10 p-2 rounded-xl cursor-pointer bg-opacity-0 hover:bg-opacity-20'}>
						<HiSearch size={'1.2em'}/>
					</div>
					<div className={'text-xl font-azeret-mono underline'}>
						Fake Society
					</div>	
					<div className={'flex items-center space-x-3 '}>
						<div className={'bg-white flex items-center justify-center transition duration-100 w-10 h-10 p-2 rounded-xl cursor-pointer bg-opacity-0 hover:bg-opacity-20'}>
							<HiOutlineBell size={'1.5em'}/>
						</div>
						<div className={'text-black'}>
							<Menu>
								<MenuButton>
									<Avatar name="Oshigaki Kisame" src="https://pbs.twimg.com/profile_images/776714243173474304/ByDDFCvI_400x400.jpg" />
									
								</MenuButton>
								<MenuList>
									<MenuItem 
										as={Button} 
										variant={'ghost'}
										leftIcon={<HiUser size={'1.3em'} />}>
										Profile
									</MenuItem>
									<div className={' w-full border-t border-b p-1 border-black border-opacity-10'}>
									<h1 className={'pl-3 text-sm'}>Switch to</h1>  
									{
										posts.map((profile, index) => index < 3 && (

											<MenuItem key={index}>
												<Avatar size={'md'} name={profile.name} src={profile.avatar}/>
												<h1 className="text-sm ml-2">{profile.username}</h1>
												
											</MenuItem>
										))
									}
									</div>
									<MenuItem 
										as={Button} 
										variant={'ghost'}
										leftIcon={<HiLogout size={"1.3em"}/>}>
									Sign Out
									</MenuItem>
								</MenuList>
							</Menu>
							
						</div>
					</div>
				</div>

			</div>

			
		</div>
	)
}