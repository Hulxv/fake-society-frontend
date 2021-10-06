import { useRouter } from 'next/router'
import {
	useState
	
} from 'react'

import {
	Avatar,
	AvatarBadge,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	MenuDivider,
	Button,
	

} from '@chakra-ui/react'

import {
	HiOutlineDotsHorizontal,
	HiShieldExclamation,
	HiOutlineBookmark,
	HiBan,
	HiUserRemove,
	HiChatAlt2
	

} from 'react-icons/hi'

import Unfriend from './Unfriend'
import Report from './Report'
import BlockFriend from './BlockFriend'

export default function Friend({firstName, lastName, title, picture, id}) {
	const Router = useRouter()
	const [unFriendIsOpen, setUnfriendIsOpen] = useState(false);
	const onUnfriendClose = () => setUnfriendIsOpen(false);

	const [blockFriendIsOpen, setBlockFriendIsOpen] = useState(false);
	const onBlockFriendClose = () => setBlockFriendIsOpen(false);

	const [reportIsOpen, setReportIsOpen] = useState(false);
	const onReportClose = () => setReportIsOpen(false);
	

	return(
		<>
		<div className={'w-full bg-white justify-between capitalize px-4 py-6 flex space-x-2 items-center rounded-xl'}>
			<div className="flex space-x-2 items-center">
				<Avatar src={picture} alt=""/>
				<h1>{`${firstName} ${lastName}`}</h1>
				
			</div>
			<div className='flex space-x-2'>
				<Menu isLazy>
					<MenuButton 
						as={IconButton} 
						icon={<HiOutlineDotsHorizontal size={'1.2em'}/>}
						aria-label="Options"
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
				<IconButton icon={<HiChatAlt2 size='1.6em'/>} variant='ghost'/>
			</div>
			<Unfriend 
				firstName={firstName} 
				id={id} 
				title={title} 
				onClose={onUnfriendClose} 
				isOpen={unFriendIsOpen}

			/>
			<BlockFriend 
				firstName={firstName} 
				id={id} 
				title={title} 
				onClose={onBlockFriendClose} 
				isOpen={blockFriendIsOpen}

			/>
			<Report 
				firstName={firstName} 
				id={id} 
				title={title} 
				onClose={onReportClose} 
				isOpen={reportIsOpen}

			/>
		</div>
		</>
	)
}