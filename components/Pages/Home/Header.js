import {
	Input,
	InputGroup,
	InputRightElement,
	Button,
	IconButton
} from '@chakra-ui/react'
import {
	GrNotification,
	GrAdd,
	GrSearch

} from 'react-icons/gr'
export default function Header() {
	
	return (
		<div className={'flex flex-col items-center space-y-8 bg-white w-full p-2'}>
			
			<div className={'w-full flex  items-center   pt-2'}>
				
				<div className={'flex items-center space-x-3 w-full w-full'}>
					<div>
						<GrNotification size={'1.2em'}/>
					</div>
					<InputGroup>
						<Input 
							placeHolder={'Search...'}
							variant={'outline'}
							colorScheme={'gray'}
						/>
						<InputRightElement>
							<IconButton icon={<GrSearch/>} variant={'ghost'}/>
						</InputRightElement>
					</InputGroup>
					<div className={''}>
						<img src="https://pbs.twimg.com/profile_images/776714243173474304/ByDDFCvI_400x400.jpg" className={'w-24 rounded-full'}/>
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