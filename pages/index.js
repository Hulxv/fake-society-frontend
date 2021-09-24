import App from "./_app";
import {
	Stack,
	AvatarBadge,
	InputRightElement,
	Button,
	IconButton,
	Avatar,
} from '@chakra-ui/react'

import {
	HiPlus,

} from 'react-icons/hi'
// Components
import Navigation from '../components/Navigation'
import Header from '../components/Pages/Home/Header'
import Posts from '../components/Posts'
import FriendsList from '../components/FriendsList'



export default function Home() {
	
	return (
		<div className={' overflow-hidden '}>
			<Navigation/>
			<Header/>

			<div className={'flex w-full items-center flex-col md:justify-between md:items-start md:flex-row-reverse md:h-screen'}>
				<div className={'w-full md:w-auto pt-2 md:p-8 md:pt-6 rounded-xl space-y-3 md:space-x-3 bg-white flex md:items-center md:h-full md:overflow-hidden md:overflow-y-auto flex-col md:ml-8 scrollbar scrollbar-thumb-gray-900'}>

					<div className={'p-4 md:p-0'}>
						<Button 
							rightIcon={<HiPlus size={30}/>} 
							width={'full'} 
							colorScheme={'blue'}
							variant={'solid'}
							
						>
							New Post
						</Button>
						
					</div>
						
					<h1 className={'self-center text-xl'}>Friends</h1>
					<FriendsList />
										

				</div>
				<Posts />
			</div>
		</div>

	);
}
