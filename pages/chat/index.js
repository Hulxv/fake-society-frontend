import {
	Avatar,
	AvatarBadge,
	Badge,
	Divider
} from '@chakra-ui/react'
import Chat from '../../components/Chat'


export default function Chats({chats}) {
	
	return (
		<div className={'w-full flex flex-col space-y-5'}>
			{
				chats.map((chat,index) => (
					<Chat 
						avatar={chat.avatar}
						isOnline={chat.isOnline}
						username={chat.username}
						lastMessage={chat.lastMessage}
						isNew={true}
					/>

				))
			}
		</div>
	)

}



export function getStaticProps() {
	// For testing
	const names = ['Mohamed', 'Ahmed', 'Sara', "Amir", "Mostafa", "Emad", "Sayed", "Abdallah", "Abd Elnasser"];
	const chats = [
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
		{
			avatar:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
			username: names[Math.floor(Math.random() * names.length)],
			lastMessage: {
				content: "Lets meet up tonight, We will eat in McDonalds, What do you will eat ? ;) ",
				date: new Date().toLocaleString(),
				isNew: Math.floor(Math.random() * 2)

			},
			isOnline: Math.floor(Math.random() * 2)
		},
	
	]

	return {
		props: {
			chats
		}
	}
}