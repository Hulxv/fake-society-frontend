import {
	Switch
} from '@chakra-ui/react'

export default function Apperance() {
	

	return (
		<div className={'flex items-center space-x-2'}>
			<span className={'text-lg'}>
				Dark mode 
			</span>
			<Switch size={'lg'}/>
		</div>
	)
}