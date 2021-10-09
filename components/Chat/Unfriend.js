import { useState } from 'react'

import {
	Button,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,


} from '@chakra-ui/react'



export default function Unfriend({firstName, id, isOpen, onClose}) {
	

	return (
		<AlertDialog
	        isOpen={isOpen}
	        onClose={onClose}
	        isCentered
	        motionPreset="slideInBottom"
	      >
	        <AlertDialogOverlay>
	          <AlertDialogContent>
	            <AlertDialogHeader fontSize="lg" fontWeight="bold">
	              Unfriend
	            </AlertDialogHeader>

	            <AlertDialogBody>
	              Do you really want to unfriend <span className="capitalize">{firstName}</span> 
	            </AlertDialogBody>

	            <AlertDialogFooter>
	              <Button onClick={onClose}>
	                Cancel
	              </Button>
	              <Button colorScheme="red" onClick={onClose} ml={3}>
	                Unfriend
	              </Button>
	            </AlertDialogFooter>
	          </AlertDialogContent>
	        </AlertDialogOverlay>
	    </AlertDialog>
	)
}