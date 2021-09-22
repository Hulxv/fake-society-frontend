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
	GrNotification,
	GrAdd,
	GrSearch

} from 'react-icons/gr'
// Components
import Navigation from '../components/Navigation'
import Header from '../components/Pages/Home/Header'
import Post from '../components/Post'


// Posts
import {posts} from '../data/posts.js'

// Friends
import { friends } from '../data/friends.js'

export default function Home() {
	
	return (
		<div className={' overflow-hidden '}>
			<Navigation/>
			<Header/>

			<div className={'flex w-full items-center flex-col md:justify-between md:items-start md:flex-row-reverse md:h-screen'}>
				<div className={'w-full md:w-auto pt-2 md:right-0 md:top-1 md:sticky md:p-12 md:pt-6 rounded-xl space-y-3 md:space-x-3 bg-white flex justify-center md:items-center overflow-hidden flex-col md:ml-8'}>

					<div className={'p-4 md:p-0'}>
						<Button 
							rightIcon={<GrAdd size={20} style={{ fill: 'white' }}/>} 
							width={'full'} 
							colorScheme={'blue'}
							variant={'solid'}
						>
							New Post
						</Button>
						
					</div>
						
					<h1 className={'self-center text-xl'}>Friends</h1>
					<div className={'flex md:flex-col md:space-y-3 items-center overflow-x-auto md:overflow-x-hidden md:overflow-y-auto py-2 md:py-0'}>

							{
								friends.map((friend, index) => (
									<div className={'items-center space-y-1 p-2 flex flex-col'} key={index}>
										<Avatar src={friend.avatar} name={friend.name}>
											{
												friend.isActive ? 
													<AvatarBadge boxSize=".9em" bg="green.500" />
																:
													<AvatarBadge boxSize=".9em" bg="red.500" />
											}
										</Avatar>
										<h1 className={'text-xs truncate text-center w-20 md:w-20'}>{friend.name}</h1>
									</div>
								))
							}
						
					</div>
										

				</div>
				<div className={'flex flex-col md:h-full p-1 md:overflow-y-auto mt-4 md:mt-0 space-y-3 items-center justify-center md:w-full'}>

					{
						posts.map((post,index) => 
								<Post
									key={index}
									Username={post.username}
									AvatarImage={post.avatar}
									Content={post.content}
									ShareDate={post.date}
									Images={post.images || null}
								/>
							
						)
					}
				</div>
			</div>
		</div>

	);
}
