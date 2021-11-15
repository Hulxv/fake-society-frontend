import {
	// Drawer,
	// DrawerOverlay,
	// DrawerContent,
	// DrawerHeader,
	// DrawerFooter,
	// DrawerBody,
	// DrawerCloseButton,
	useDisclosure,
	IconButton,
	Button,
	Avatar,
	Divider,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react";
import { HiOutlineBell } from "react-icons/hi";

import { Fragment } from "react";

// data
import { notifications } from "../../data/notifications";
export default function Notifications() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<IconButton
				icon={<HiOutlineBell size={"1.5em"} />}
				variant={"none"}
				onClick={onOpen}
			/>

			<Drawer isOpen={isOpen} onClose={onClose} size='sm'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader>Notifications</DrawerHeader>
					<DrawerCloseButton />
					<DrawerBody Spacing={2}>
						<div className={"space-y-2"}>
							{notifications.map((notification, index) => (
								<Fragment key={index}>
									<div
										className={
											"w-full p-2 rounded cursor-pointer flex items-center space-x-3 bg-black bg-opacity-0 hover:bg-opacity-10"
										}>
										<Avatar
											src={notification.avatar}
											name={notification.from}
										/>
										<div>{`${notification.from} ${notification.message}`}</div>
									</div>
									<Divider />
								</Fragment>
							))}
						</div>
					</DrawerBody>

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
