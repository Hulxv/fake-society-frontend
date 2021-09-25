import {
	Avatar,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	IconButton,
	Button,
	Portal
} from '@chakra-ui/react'

import {
	HiOutlineDotsHorizontal,
	HiShieldExclamation,
	HiOutlineBookmark,
	HiOutlineUserRemove,
	HiOutlineTrash

} from 'react-icons/hi'


export default function PostHead(props) {
	const { Username, AvatarImage, ShareDate } = props
	return (
		<div className={'flex justify-between items-center w-full'}>
			<div className="flex space-x-2 self-start justify-start items-center ">
				<div>
					<Avatar name={Username} src={AvatarImage} loading={"lazy"}/>
				</div>
				<div className="flex flex-col items-start">
					<span>{Username}</span>
					<span className={'text-black text-opacity-40 text-xs'}>{ShareDate}</span>
				</div>
			</div>

			<div className={'text-black'}>
				<Menu isLazy>
					<MenuButton 
						as={IconButton} 
						icon={<HiOutlineDotsHorizontal size={'1.2em'}/>}
						aria-label="Options"
						variant={'ghost'}
					/>
					<Portal>
						<MenuList>
							<MenuItem as={Button} variant={'ghost'} leftIcon={<HiOutlineBookmark size={'1.2em'}/>}>Save</MenuItem>
							<MenuItem as={Button} variant={'ghost'} leftIcon={<HiOutlineTrash size={'1.2em'}/>}>Delete</MenuItem>
							<MenuItem as={Button} variant={'ghost'} leftIcon={<HiOutlineUserRemove size={'1.2em'}/>}>Block User</MenuItem>
							<MenuItem as={Button} variant={'ghost'} leftIcon={<HiShieldExclamation size={'1.2em'}/>}>Report</MenuItem>
						</MenuList>
					</Portal>
				</Menu>
			</div>
		</div>
	)
}