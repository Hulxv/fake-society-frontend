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
import Header from '../components/Header'
import Posts from '../components/Posts'
import FriendsList from '../components/FriendsList'
import AddNewPost from '../components/AddNewPost'


export default function Home() {
	
	return (
		<div className={''}>
			<Navigation/>
			<Header/>
			<div className={'flex w-full items-center flex-col md:justify-between md:items-start md:flex-row-reverse md:h-screen'}>
				<div className={'w-full md:w-72'}>

					<div className={'md:fixed md:right-2 md:w-auto pt-2 md:p-8 md:pt-6 rounded-xl space-y-3 md:space-x-3 bg-white flex md:items-center md:h-126 md:overflow-hidden md:overflow-y-auto flex-col md:ml-8 '}>

						<div className={'p-4 md:p-0'}>
							<AddNewPost />
							
						</div>
							
						<h1 className={'self-center text-xl'}>Friends</h1>
						<FriendsList />
											

					</div>
				</div>

				<Posts />
			</div>
		</div>

	);
}
