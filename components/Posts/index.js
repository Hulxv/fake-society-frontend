
import Post from "../Post"

// Posts
import {posts} from '../../data/posts.js'

export default function Posts() {
	

	return (

		<div className={'flex flex-col  p-1 md:h-full md:overflow-y-auto mt-4 md:mt-0 space-y-3 items-center w-full scrollbar-thin'}>

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
		</div>
	)
}