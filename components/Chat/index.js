import {
	useState
} from 'react'


import {
	Avatar,
	AvatarBadge,
	Badge,
	Divider,
	IconButton
} from '@chakra-ui/react'

import {
	HiOutlineDotsHorizontal,
	HiShieldExclamation,
	HiOutlineBookmark,
	HiBan,
	HiUserRemove,
	HiChatAlt2
	

} from 'react-icons/hi'
import Menu from './Menu'
export default function Chat({username, avatar, isOnline, lastMessage, userID }) {
	const [unFriendIsOpen, setUnfriendIsOpen] = useState(false);
	const onUnfriendClose = () => setUnfriendIsOpen(false);

	const [blockFriendIsOpen, setBlockFriendIsOpen] = useState(false);
	const onBlockFriendClose = () => setBlockFriendIsOpen(false);

	const [reportIsOpen, setReportIsOpen] = useState(false);
	const onReportClose = () => setReportIsOpen(false)

	return (
		
		<div className={'flex bg-white rounded-xl shadow-md py-4 px-2 justify-center items-center w-full'}>
			<div className={'items-center w-full justify-between flex space-x-1'}>

				<Avatar src={avatar} name={username}>
				{
					isOnline ? 
						<AvatarBadge boxSize=".9em" bg="green.500" />
									:
						<AvatarBadge />
				}
				</Avatar>
				<div className={'flex justify-center items-start w-full space-y-1 flex-col'}>
					<div className={'flex justify-between w-full items-end '}>
						
						<h1 className={'text-sm text-center'}>{username}</h1>
						<Menu 
							username={username}
							id={userID}
						/>
					</div>
					<div className={'w-full flex flex-col '}>
						
						<p className={`text-xs mb-1 ${lastMessage.isNew ? 'opacity-90' : 'opacity-70'}`}>{lastMessage.content}</p>
						<div className={'self-end flex'}>
							{
								lastMessage.isNew
								? <Badge colorScheme='blue'>New Message</Badge>
								: <span style={{fontSize:'10px', opacity:'80%'}}>{lastMessage.date}</span>

							}
							
							
						</div>
					</div>
				</div>
			</div>
		</div>	
	)
} 