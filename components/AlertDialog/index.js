import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
} from "@chakra-ui/react";

import { useRef, useState } from "react";

export default function AlertDialogComponent({
	body,
	header,
	title,
	as = "button",
	isOpen = false,
	setIsOpen,
	onClick = () => {},
	onClose = () => {},
	colorScheme = "",
	children,
	submitBtnTitle,
	cancelBtnTitle,
	onSubmit = () => {},
	onCancel = () => {},
	submitBtnLoading = false,
	cancelBtnLoading = false,
}) {
	const cancelRef = useRef();

	return (
		<>
			<div
				onClick={() => {
					setIsOpen(true);
					onClick();
				}}>
				{children || (
					<Button colorScheme={colorScheme} as={as}>
						{title}
					</Button>
				)}
			</div>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize='lg' fontWeight='bold'>
							{header}
						</AlertDialogHeader>

						<AlertDialogBody>{body}</AlertDialogBody>

						<AlertDialogFooter>
							<Button
								isLoading={cancelBtnLoading}
								ref={cancelRef}
								onClick={() => {
									onCancel();
									setIsOpen(false);
								}}>
								{cancelBtnTitle}
							</Button>
							<Button
								isLoading={submitBtnLoading}
								colorScheme='red'
								onClick={() => {
									onSubmit();
								}}
								ml={3}>
								{submitBtnTitle}
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}
