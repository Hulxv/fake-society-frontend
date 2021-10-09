import { useState } from 'react'
import { useRouter } from 'next/router'


import BlockFriend from './BlockFriend'
import Report from './Report'
import Unfriend from './Unfriend'

import {
	Menu,
	MenuList,
	MenuItem,
	MenuButton,
	IconButton,
	Button
} from '@chakra-ui/react'

import {
	HiOutlineDotsHorizontal,
	HiShieldExclamation,
	HiOutlineBookmark,
	HiBan,
	HiUserRemove,
	HiChatAlt2
	

} from 'react-icons/hi'

export default function MENU({username, id}) {
	const Router = useRouter()


	const [unFriendIsOpen, setUnfriendIsOpen] = useState(false);
	const onUnfriendClose = () => setUnfriendIsOpen(false);

	const [blockFriendIsOpen, setBlockFriendIsOpen] = useState(false);
	const onBlockFriendClose = () => setBlockFriendIsOpen(false);

	const [reportIsOpen, setReportIsOpen] = useState(false);
	const onReportClose = () => setReportIsOpen(false);


	return (
	<>

	<Menu isLazy>
		<MenuButton 
			as={IconButton} 
			icon={<HiOutlineDotsHorizontal size={'1.2em'}/>}
			aria-label="Options"
			size={'sm'}
			variant={'ghost'}
		/>
		
		<MenuList>

			<MenuItem 
				as={Button} 
				variant={'ghost'} 
				leftIcon={<HiOutlineBookmark size={'1.2em'}/>}
				onClick={() => Router.push(`/profile/${id}`)}
			>
				Visit Profile
			</MenuItem>
			
			<MenuItem 
				as={Button}
				variant={'ghost'} 
				leftIcon={<HiUserRemove size={'1.2em'}/>}
				onClick={() => setUnfriendIsOpen(true)}
			>
				Unfriend
			</MenuItem>

			<MenuItem 
				as={Button}
				variant={'ghost'} 
				leftIcon={<HiBan size={'1.2em'}/>}
				onClick={() => setBlockFriendIsOpen(true)}
			>
				Block
			</MenuItem>

			<MenuItem 
				as={Button}
				variant={'ghost'} 
				leftIcon={<HiShieldExclamation size={'1.2em'}/>}
				onClick={() => setReportIsOpen(true)}
			>
				Report
			</MenuItem>
		</MenuList>
		
	</Menu>
	<Unfriend 
		firstName={username} 
		id={0} 
		onClose={onUnfriendClose} 
		isOpen={unFriendIsOpen}

	/>
	<BlockFriend 
		firstName={username} 
		id={0}
		onClose={onBlockFriendClose} 
		isOpen={blockFriendIsOpen}

	/>
	<Report 
		firstName={username} 
		id={0} 
		onClose={onReportClose} 
		isOpen={reportIsOpen}

	/>
	</>
	)
}