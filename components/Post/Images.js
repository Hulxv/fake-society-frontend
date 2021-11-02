import Zoom from 'react-medium-image-zoom'
import { Fragment } from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure, 
	Button,
	Avatar,
	Divider,
	Img
  	
} from '@chakra-ui/react'


 export default function Images(props) {
 	const {ImagesList} = props
 	const { isOpen, onOpen, onClose } = useDisclosure()


 	return (ImagesList !== null && ImagesList.length > 0 ) && (
	<div className=" flex flex-col items-center space-y-2 w-full">
		<div className={'w-full justify-center flex flex-wrap'}>	

			{
				ImagesList.map((img, index) => index <= 2 && (

					<Zoom key={index}>
						<Img src={img} alt="" className={'p-1 rounded-lg h-36 sm:h-60  overflow-hidden'}/>
					</Zoom>

				))
			}
		</div>
	
	
		{ImagesList.length > 3 && <>
		<Button onClick={onOpen} size='xs' variant="ghost">View All Images</Button>

	      <Modal isOpen={isOpen} onClose={onClose}  scrollBehavior={'inside'} size={'lg'}>
	        <ModalOverlay />
	        <ModalContent>
	          <ModalHeader>Notifications</ModalHeader>
	          <ModalCloseButton />
	          <ModalBody Spacing={2}>
	            <div className={'space-y-2 flex flex-col items-center'}>
	              {
	              	ImagesList.map((Image, index) => (
	                    <Fragment key={index}>
	              			<Zoom>
	              				<img src={Image} alt="" className={'p-1 rounded-lg w-full overflow-hidden'}/>

	              			</Zoom>
	                    	<Divider />
	                    </Fragment>
	              		))
	              }
	            </div>
	          </ModalBody>

	          <ModalFooter>
	            <Button colorScheme="blue" mr={3} onClick={onClose}>
	              Close
	            </Button>
	          </ModalFooter>
	        </ModalContent>
	      </Modal>
		</>}

	</div>
 	)
 }