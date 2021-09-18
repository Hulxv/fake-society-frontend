import {
	Input,
	InputGroup,
	InputRightElement,
	Button,
} from '@chakra-ui/react'
import {
	GrNotification,
	GrAdd

} from 'react-icons/gr'
export default function Header() {
	
	return (
		<div className={'flex flex-col items-center space-y-8'}>
			
			<div className={'w-full flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 pt-2'}>
				<div className={'text-md sm:text-sm md:text-lg xl:text-xl'}>
					<h1>
						How are you today, Mr. <span className={'underline capitalize'}>mohamed</span> ? 
					</h1>
				</div>
				<div className={'flex flex-nowrap items-center space-x-1 w-full sm:w-auto'}>
					<div>
						<GrNotification size={'1.2em'}/>
					</div>
					<Input 
						placeHolder={'Search...'}
						variant={'outline'}
						colorScheme={'gray'}
					/>
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