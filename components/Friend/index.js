import {
	useState
	
} from 'react'

import {
	Avatar,
	AvatarBadge,
	IconButton,
	Button,
	Badge
	

} from '@chakra-ui/react'

import {
	
	HiChatAlt2
	

} from 'react-icons/hi'

import Menu from './Menu'

export default function Friend({firstName, lastName, title, picture, id}) {	
	// For Testing
	const [isOnline, setIsOnline] = useState(Math.floor(Math.random() * 2))
	return(
		<>
		<div className={'w-full bg-white justify-between capitalize px-4 py-6 flex space-x-2 items-center rounded-xl'}>
			<div className="flex space-x-2 items-center">
				<Avatar src={picture} alt=""/>
				<div>
					<h1>{`${firstName} ${lastName}`}</h1>
					{isOnline ? <Badge colorScheme='green'>Online</Badge> 
							: <Badge colorScheme='red'>offline</Badge> 
					}
				</div>
				
			</div>
			<div className='flex space-x-2'>
				<Menu username={firstName}/>
				<IconButton icon={<HiChatAlt2 size='1.6em'/>} variant='ghost'/>
			</div>

		</div>
		</>
	)
}