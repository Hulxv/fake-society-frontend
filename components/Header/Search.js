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
  Input,
  InputRightElement,
  InputGroup
} from '@chakra-ui/react'
import { HiSearch } from 'react-icons/hi'
export default function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton icon={<HiSearch size={'1.5em'}/>} variant={'none'} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}  scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <Input placeHolder={'Search'} variant={'filled'}/>
              <InputRightElement>
                <IconButton color={'blue'} icon={<HiSearch size={'1.1em'}/>}></IconButton>
              </InputRightElement>  
            </InputGroup>
           
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