import { useState, useRef, useEffect } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react"

import {
    HiTrash
} from 'react-icons/hi'
export default DeleteAccountAlertDialog() => {
    const [isOpen, setIsOpen] = useState(false);
    const [ButtonIsDisable, setButtonIsDisable] = useState(true);
    const [InputContent, setInputContent] = useState('')
  const Toast = useToast()

    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();

    useEffect(() => {
        if(InputContent === 'Delete my account') setButtonIsDisable(false)
        else setButtonIsDisable(true)
    }, [InputContent])

    return (
    <>
        <Button 
            colorScheme='red' 
            mt={5}
            size='sm'
            alignSelf={'end'}
            leftIcon={<HiTrash size='1.4em'/>}   
            onClick={() => setIsOpen(true)}   
        >
            Delete Account
        </Button>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              
                <p className='mb-2'>Write {"'<span className='text-red-600'>Delete my account</span>'"} to compolete operation.</p>
                <Input 
                    variant='filled' 
                    placeHolder='Delete my account'
                    value={InputContent}
                    onChange={(e) => {
                        setInputContent(e.target.value)
                    }}
                />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button 
                  ref={cancelRef} 
                  onClick={()=> {
                    setInputContent('')
                    onClose()
                  }} 
              >
                Cancel
              </Button>
              <Button 
                  colorScheme="red" 
                  ml={3} 
                  isDisabled={ButtonIsDisable}
                  onClick={()=> {
                    // Do the operation
                    setInputContent('')
                    Toast({
                      title: "Account removed",
                      description: "Your account has been removed.",
                      status: "warning",
                      duration: 3000,
                      isClosable: true,
                    })
                    onClose()

                  }} 
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
    )


}