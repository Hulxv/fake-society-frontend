import {
	// Drawer,
	// DrawerOverlay,
	// DrawerContent,
	// DrawerHeader,
	// DrawerFooter,
	// DrawerBody,
	// DrawerCloseButton,
	useDisclosure,
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Divider,
} from "@chakra-ui/react";

import { GoCommentDiscussion } from "react-icons/go";

export default function Comments({ children }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<div onClick={onOpen}>{children}</div>

			<Drawer isOpen={isOpen} onClose={onClose} size='sm'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader display='flex' alignItems='center'>
						<GoCommentDiscussion size='1.4em' />
						<span className='ml-2'>Comments</span>
					</DrawerHeader>
					<Divider />
					<DrawerCloseButton />
					<DrawerBody Spacing={2}>{/* Comments */}</DrawerBody>

					<Divider />
					<DrawerFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}
