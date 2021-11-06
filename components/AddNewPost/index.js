import { useForm, useWatch } from "react-hook-form";
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
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { HiPlus } from "react-icons/hi";
import { FaPhotoVideo, FaCode } from "react-icons/fa";

import axios from "axios";
import { GetNewToken, useAuth } from "../../Auth";
import router from "next/router";
import Cookies from "js-cookie";

export default function CreatePost({ component }) {
	const { token, setToken } = useAuth();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		handleSubmit,
		register,
		control,
		formState: { isSubmitting },
	} = useForm();
	const PostContent = useWatch({
		control,
		name: "content",
		defaultValue: "",
	});

	async function createPost(data) {
		// console.log(data);
		// console.log(token);

		const oldTokens = JSON.parse(Cookies.get("token"));
		console.log(oldTokens);
		try {
			const newTokens = await GetNewToken(oldTokens.refresh, oldTokens);
			console.log("new", newTokens);
			const config = {
				headers: {
					Authorization: `Bearer ${JSON.parse(newTokens).access}`,
				},
			};
			const req = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/api/posts/`,
				{
					content: data.content,
				},
				config,
			);
			toast({
				title: `Post created successfully.`,
				status: "success",
				position: "top",
				duration: 9000,
				isClosable: true,
			});

			onClose(); // To close Modal
			router.replace(router.asPath);

			console.log(req);
		} catch (err) {
			console.error(err);
			console.log(err?.response);
			const { data, status, statusText } = err?.response;

			toast({
				title: `[${status}] ${statusText}`,
				description: data.detail,
				status: "error",
				position: "top",
				duration: 9000,
				isClosable: true,
			});
		}
	}

	return (
		<>
			<div onClick={onOpen} className='w-full'>
				{component || (
					<Button
						rightIcon={<HiPlus size={30} />}
						width={"full"}
						colorScheme={"blue"}
						variant={"solid"}>
						New Post
					</Button>
				)}
			</div>
			<Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>New Post</ModalHeader>

					<form onSubmit={handleSubmit(createPost)}>
						<ModalBody>
							<Textarea
								placeholder={"What do you think ?"}
								size={"lg"}
								variant={"filled"}
								{...register("content")}
							/>
							<div className={"space-x-2"}>
								<Button leftIcon={<FaPhotoVideo />} variant={"solid"} mt={5}>
									Media
								</Button>
								<Button leftIcon={<FaCode />} variant={"solid"} mt={5}>
									Code
								</Button>
							</div>
						</ModalBody>

						<ModalFooter>
							<Button
								colorScheme='blue'
								mr={3}
								type='submit'
								isDisabled={PostContent.length < 1}
								isLoading={isSubmitting}>
								Share
							</Button>

							<Button mr={3} variant={"ghost"} onClick={onClose}>
								Close
							</Button>
						</ModalFooter>
					</form>
				</ModalContent>
			</Modal>
		</>
	);
}
