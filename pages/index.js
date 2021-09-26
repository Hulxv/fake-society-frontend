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
		
		<div className={'w-full'}>
				

			<Posts />
		
		</div>

	);
}
