import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure, 
	IconButton,
	Button,
	Avatar
} from '@chakra-ui/react'
import {
	HiOutlineBell,

} from 'react-icons/hi'

// data
import { notifications } from '../../data/notifications'
export default function Notifications() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton icon={<HiOutlineBell size={'1.5em'}/>} variant={'none'} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}  scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notifications</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
            	notifications.map((notification) => (

            			<div className={'w-full p-2 rounded cursor-pointer mb-6 flex items-center space-x-3 bg-black bg-opacity-0 hover:bg-opacity-10'}>
            				<Avatar src={notification.avatar} name={notification.from}/>
            				<div>
            					{
            						`${notification.from} ${notification.message}`
            					}
            					
            				</div>
            			</div>
            		))
            }
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}