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
  InputGroup,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from '@chakra-ui/react'
import { HiSearch } from 'react-icons/hi'
export default function Search({Component, taps=['groups','posts','users']}) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const defaultTaps = ['groups','posts','users']
  return (
    <>
      <div onClick={onOpen} className={'cursor-pointer'}>  
        {Component}
      </div>

      <Modal isOpen={isOpen} onClose={onClose}  scrollBehavior={'inside'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Search  
            {
                taps.length === 1 && 
                defaultTaps.indexOf(taps[0]) > -1 &&
                <span className={'capitalize'}> in {taps}</span>
            }
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
            <InputGroup>
              <Input placeholder={'Search'} variant={'filled'}/>
              <InputRightElement>
                <IconButton color={'blue'} variant={'ghost'} icon={<HiSearch size={'1.1em'}/>}></IconButton>
              </InputRightElement>  
            </InputGroup>

            <Tabs isFitted mt={4} variant={'enclosed'}>
              <TabList>
                {
                    taps.length > 1 &&
                    <> 
                    {
                      taps.indexOf('users') > -1 &&
                      <Tab>Users</Tab>
                    }
                    {
                      taps.indexOf('posts') > -1 &&
                      <Tab>Posts</Tab>
                    }
                    {
                      taps.indexOf('groups') > -1 &&
                      <Tab>Groups</Tab>
                    }
                    </>
                }
                
              </TabList> 
              <TabPanels>
                {
                  taps.indexOf('users') > -1 &&
                  <TabPanel>users</TabPanel>
                }
                {
                  taps.indexOf('posts') > -1 &&
                  <TabPanel>posts</TabPanel>
                }
                {
                  taps.indexOf('groups') > -1 &&
                  <TabPanel>Groups</TabPanel>
                }
                
              </TabPanels>
            </Tabs>

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