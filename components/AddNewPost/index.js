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
  Textarea
} from '@chakra-ui/react'
import { HiPlus, } from 'react-icons/hi'
import { FaPhotoVideo, FaCode } from 'react-icons/fa'
export default function NewPost() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button 
        rightIcon={<HiPlus size={30}/>} 
        width={'full'} 
        colorScheme={'blue'}
        variant={'solid'}
        onClick={onOpen}
        
      >
        New Post
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}  scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Post</ModalHeader>
        
          <ModalBody>
            
            <Textarea placeHolder={'What do you think ?'} size={'lg'} variant={'filled'}/>
            <div className={'space-x-2'}>
              <Button leftIcon={<FaPhotoVideo/>} variant={'solid'} mt={5}>Media</Button>
              <Button leftIcon={<FaCode/>} variant={'solid'} mt={5}>Code</Button>

            </div>           

           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Share
            </Button>

            <Button  mr={3} variant={'ghost'} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}