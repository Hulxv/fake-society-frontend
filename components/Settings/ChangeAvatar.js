import { useState } from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	useToast,
	Avatar,
	AvatarGroup,
	IconButton
} from "@chakra-ui/react"

import {
	RiImageEditFill
} from 'react-icons/ri'

import dynamic from 'next/dynamic'
const EditAvatar = dynamic(() => import('react-avatar-edit'), {
    ssr: false
})

export default function ChangeAvatar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
	const [ImageAfterCropping, setImageAfterCropping] = useState('');
	const Toast = useToast()
	
	return (
	<>
		<div className='flex flex-col items-center relative cursor-pointer hover:opacity-80 transition duration-300' onClick={onOpen}>
			
			<Avatar 
				size="lg" 
				name="Oshigaki Kisame" 
				src={typeof window !== 'undefined' && window.localStorage.getItem('fake-society-avatar')}
			/>
			<div className={'absolute right-0 bottom-0 bg-white rounded-full p-1 '}>
				<RiImageEditFill size='.9em'/>
			</div>
		</div>	
		

		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					Edit Avatar
				</ModalHeader>
				<ModalCloseButton/>

				<ModalBody>
					<div className={' flex flex-col items-center'}>
						<EditAvatar
				          width={390}
				          height={295}
				         	onCrop={(img) => {
				        		setImageAfterCropping(img)
				        	}}
				        />
					</div>
				</ModalBody>

				<ModalFooter>
					<Button 
						colorScheme={'blue'} 
						onClick={() => {
							if(typeof window !== 'undefined' && ImageAfterCropping !== ''){
								
								window.localStorage.setItem('fake-society-avatar', ImageAfterCropping);
								{/*
							TODO: Write a code to post avatar image to API
								*/}
								Toast({
									title: "Avatar changed !",
									description: "Your avatar has been change successfully.",
									status: "success",
									duration: 3000,
									isClosable: true,
								})
								onClose()
							}
						}}
					>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>


	</>
	)
}