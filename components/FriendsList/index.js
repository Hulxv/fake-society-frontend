
// Chakra UI
import {
	Avatar,
	AvatarBadge 
} from '@chakra-ui/react'

// Friends
import { friends } from '../../data/friends.js'


export default function FriendsList() {
	

	return (
		<div className={'flex md:flex-col md:space-y-3 items-center overflow-x-auto md:h-full md:overflow-hidden scrollbar scrollbar-thin  md:overflow-y-auto py-2 '}>
				{
					friends.map((friend, index) => (
						<div className={'items-center space-y-1 p-2 flex flex-col'} key={index}>
							<Avatar src={friend.avatar} name={friend.name}>
								{
									friend.isActive ? 
										<AvatarBadge boxSize=".9em" bg="green.500" />
													:
										<AvatarBadge boxSize=".9em" bg="red.500" />
								}
							</Avatar>
							<h1 className={'text-xs truncate text-center w-20 md:w-20'}>{friend.name}</h1>
						</div>
					))
				}
			
		</div>
	)
}