import Zoom from 'react-medium-image-zoom'

import {
	Button
} from '@chakra-ui/react'


 export default function Images(props) {
 	const {ImagesList} = props

 	return (ImagesList !== null && ImagesList.length > 0 ) && (
	<div className=" flex flex-col items-center space-y-2 w-full">
		<div className={'w-full justify-center flex flex-wrap'}>	

			{
				ImagesList.map((img, index) => index <= 2 && (

					<Zoom key={index}>
						<img src={img} alt="" className={'p-1 rounded-lg h-36 sm:h-60  overflow-hidden'}/>
					</Zoom>

				))
			}
		</div>
	
	
		{ImagesList.length > 3 && <Button size={'xs'}>View All Images</Button>}
	</div>
 	)
 }