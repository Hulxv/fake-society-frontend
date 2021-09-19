import App from "./_app";

// Components
import Navigation from '../components/Navigation'
import Header from '../components/Pages/Home/Header'
import Post from '../components/Post'
import {posts} from '../data/posts.js'
export default function Home() {
	
	return (
		<div className={''}>
			<Navigation/>
			<Header/>
			<div className={'flex flex-col mt-4 space-y-3 items-center justify-center'}>
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
	);
}
