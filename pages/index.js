import App from "./_app";
import { useState } from 'react'
// Components
import Navigation from '../components/Navigation'
import Header from '../components/Pages/Home/Header'
import Post from '../components/Post'
import {posts} from '../data/posts.js'
export default function Home() {
	// const [ posts, setPosts ]
	return (
		<div className={''}>
			<Navigation/>
			<Header/>
			<div className={'flex flex-col items-center justify-center'}>
				{
					posts.map((post,index) => 
							<Post
								Username={post.username}
								Avatar={post.avatar}
								Content={post.content }
							/>
						
					)
				}
			</div>
		</div>
	);
}
