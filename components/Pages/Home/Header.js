import {
	Input,
	InputGroup,
	InputRightElement,
	Button,
	IconButton,
	Avatar,
} from '@chakra-ui/react'
import {
	GrNotification,
	GrAdd,
	GrSearch

} from 'react-icons/gr'

export default function Header() {
	
	return (
		<div className={'flex  flex-col items-center space-y-8 bg-white w-full p-2'}>
			
			<div className={'px-5 sm:px-20 top-0 z-20 bg-white w-screen fixed flex b items-center p-2'}>
				
				<div className={'flex items-center justify-between w-full'}>
					
					
					<IconButton icon={<GrSearch size={'1.2em'}/>} variant={'ghost'}/>
					<div className={'flex items-center space-x-3'}>

						<IconButton icon={<GrNotification size={'1.2em'}/>} variant={'ghost'}/>
						<Avatar name="Oshigaki Kisame" src="https://pbs.twimg.com/profile_images/776714243173474304/ByDDFCvI_400x400.jpg" />
					</div>
				</div>

			</div>

			<div className={'w-full space-y-3'}>
				<h1 className={'pl-2'}> Create a new post : </h1>
				<InputGroup>
					<Input
						placeHolder={'What do you think ?'}	
					/>
					<InputRightElement >
						<GrAdd/>
					</InputRightElement>
				
				</InputGroup>
					
				
			</div>
		</div>
	)
}