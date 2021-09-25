import {
	Button
} from '@chakra-ui/react'


import Post from "../Post"

// Posts
import {posts} from '../../data/posts.js'

export default function Posts() {
	

	return (	
		<div className={'w-full p-1 md:p-0 pb-4 md:pb-8 flex flex-col mt-4 md:mt-0 space-y-3 items-center '}>
			{
				posts.map((post,index) => 
					<Post
						key={index}
						index={index}
						Username={post.username}
						AvatarImage={post.avatar}
						Content={post.content}
						ShareDate={post.date}
						ImagesList={post.images || null}
					/>
					
				)
			}
			<div className={'capitalize'}>No more posts</div>
			<Button 
				colorScheme={'teal'} 
				onClick={() => window.scroll({
					  top: 100,
					  left: 100,
					  behavior: 'smooth'
					})}>
				Back To Top
			</Button>
		</div>
		
	)
}