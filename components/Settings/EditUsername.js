import {
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalFooter,
	ModalContent,
	ModalOverlay,
	ModalHeader,
	Button,
	Input,
	Box,
} from "@chakra-ui/react";
import { useAuth } from "../../Auth";

import { FiEdit, FiCheck, FiX } from "react-icons/fi";
import { useState } from "react";

export default function EditableUsername() {
	const { user } = useAuth();
	const [newUsername, setNewUserName] = useState();
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	function editUsernameHandler() {
		// Not ready

		setIsLoading(true);
	}

	return (
		<>
			<div
				className='flex items-center nowrap space-x-2'
				onClick={() => setIsOpen(true)}>
				<Box
					// bgColor='gray.100'
					// p={1}
					// px={2}
					// rounded='md'
					colorScheme='pink'
					size='sm'
					isReadOnly
					className='cursor-pointer'>
					{user?.name}
				</Box>
				<IconButton icon={<FiEdit />} size='sm' />
			</div>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Username</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input
							placeholder='New Username'
							value={newUsername}
							onChange={(e) => setNewUserName(e.target.value)}
						/>
					</ModalBody>

					<ModalFooter>
						<Button
							isLoading={isLoading}
							onClick={editUsernameHandler}
							colorScheme='blue'>
							Save Changes
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
