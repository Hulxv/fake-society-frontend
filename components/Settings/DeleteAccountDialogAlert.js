import { useState, useRef, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
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
} from "@chakra-ui/react";

import { HiTrash } from "react-icons/hi";

export default function DeleteAccountAlertDialog() {
	const { register, control, reset } = useForm();
	const DELETE_MY_ACCOUNT = useWatch({
		control,
		name: "delete_my_account",
	});
	const PASSWORD = useWatch({
		control,
		name: "password",
	});
	const [FirstDialogIsOpen, setFirstDialogIsOpen] = useState(false);
	const [ButtonIsDisable, setButtonIsDisable] = useState(true);

	const [SeconedDialogIsOpen, setSeconedDialogIsOpen] = useState(false);
	const Toast = useToast();

	const cancelRef = useRef();

	return (
		<>
			<Button
				colorScheme='red'
				mt={5}
				leftIcon={<HiTrash size='1.4em' />}
				onClick={() => setFirstDialogIsOpen(true)}>
				Delete Account
			</Button>

			<AlertDialog
				motionPreset='slideInBottom'
				leastDestructiveRef={cancelRef}
				onClose={() => setFirstDialogIsOpen(false)}
				isOpen={FirstDialogIsOpen}
				isCentered>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize='lg' fontWeight='bold'>
							Delete Account
						</AlertDialogHeader>

						<AlertDialogBody>
							<p className='mb-2'>
								Write{" "}
								<span className='text-red-600'>{"'Delete my account'"}</span> to
								compolete operation.
							</p>
							<Input
								variant='filled'
								placeHolder='Delete my account'
								{...register("delete_my_account")}
							/>
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button
								ref={cancelRef}
								onClick={() => {
									reset("");
									setFirstDialogIsOpen(false);
								}}>
								Cancel
							</Button>
							<Button
								colorScheme='red'
								ml={3}
								isDisabled={DELETE_MY_ACCOUNT !== "Delete my account"}
								onClick={() => {
									// Do the operation
									reset("");
									setSeconedDialogIsOpen(true);
								}}>
								Continue
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>

			{/* Seconed dialog */}
			<AlertDialog
				motionPreset='slideInBottom'
				leastDestructiveRef={cancelRef}
				onClose={() => setSeconedDialogIsOpen(false)}
				isOpen={SeconedDialogIsOpen}
				isCentered>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize='lg' fontWeight='bold'>
							Delete Account
						</AlertDialogHeader>

						<AlertDialogBody>
							<p className='mb-2'>Enter your password</p>
							<Input
								variant='filled'
								type='password'
								placeHolder='Password'
								{...register("password")}
							/>
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button
								ref={cancelRef}
								onClick={() => {
									reset("");
									setSeconedDialogIsOpen(false);
								}}>
								Cancel
							</Button>
							<Button
								colorScheme='red'
								ml={3}
								isDisabled={PASSWORD !== "ADMIN"}
								onClick={() => {
									// Do the operation
									reset("");
									Toast({
										title: "Account removed",
										description: "Your account has been removed.",
										status: "error",
										duration: 3000,
										isClosable: true,
									});

									// Close Dialogs
									setSeconedDialogIsOpen(false);
									setFirstDialogIsOpen(false);
								}}>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
}
