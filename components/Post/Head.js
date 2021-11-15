import { useState } from "react";
import router from "next/router";
import { formatDistanceToNow } from "date-fns";

import {
	Avatar,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	IconButton,
	Button,
	Portal,
	Badge,
} from "@chakra-ui/react";

import {
	HiOutlineDotsHorizontal,
	HiShieldExclamation,
	HiOutlineBookmark,
	HiOutlineUserRemove,
	HiOutlineTrash,
} from "react-icons/hi";
import AlertDialogComponent from "../AlertDialog";

import axios from "axios";
import { GetNewToken } from "../../Auth";
import Cookies from "js-cookie";

export default function PostHead({
	isOwnedByUser,
	author,
	publishedDate,
	group,
	postID,
}) {
	const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);

	async function DeleteHandler() {
		try {
			const oldTokens = JSON.parse(Cookies.get("token"));

			const NewTokens = JSON.parse(
				await GetNewToken(oldTokens.refresh, oldTokens),
			);
			const config = {
				headers: {
					Authorization: `Bearer ${NewTokens.access}`,
				},
			};

			console.log(NewTokens);

			const req = await axios.delete(
				`${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
				config,
				{
					pk: postID,
				},
			);
			console.log(req);
		} catch (err) {
			console.log({ ...err });
		}
	}

	return (
		<>
			<div className={"flex justify-between items-center w-full"}>
				<div
					className='flex space-x-2 self-start justify-start items-center cursor-pointer'
					onClick={() => router.push(`/profile/${author.id}`)}>
					<div>
						<Avatar
							name={author?.name ?? ""}
							src={`${process.env.NEXT_PUBLIC_API_URL}${author?.avatar}` ?? ""}
							loading={"lazy"}
						/>
					</div>
					<div className='flex flex-col items-start'>
						<div className={"flex items-center space-x-1"}>
							<span>{author?.name ?? ""}</span>

							<Badge size={"sm"} colorScheme={"teal"}>
								{group ?? ""}
							</Badge>
						</div>
						<span className={"text-black text-opacity-40 text-xs"}>
							{formatDistanceToNow(new Date(publishedDate ?? new Date()))}
						</span>
					</div>
				</div>

				<div className={"text-black"}>
					<Menu isLazy>
						<MenuButton
							as={IconButton}
							icon={<HiOutlineDotsHorizontal size={"1.2em"} />}
							aria-label='Options'
							variant={"ghost"}
						/>
						<Portal>
							<MenuList>
								<MenuItem
									as={Button}
									variant={"ghost"}
									leftIcon={<HiOutlineBookmark size={"1.2em"} />}>
									Save
								</MenuItem>
								{isOwnedByUser && (
									<MenuItem
										onClick={() => setDeleteDialogIsOpen(true)}
										as={Button}
										variant={"ghost"}
										leftIcon={<HiOutlineTrash size={"1.2em"} />}>
										Delete
									</MenuItem>
								)}
								<MenuItem
									as={Button}
									variant={"ghost"}
									leftIcon={<HiOutlineUserRemove size={"1.2em"} />}>
									Block User
								</MenuItem>
								<MenuItem
									as={Button}
									variant={"ghost"}
									leftIcon={<HiShieldExclamation size={"1.2em"} />}>
									Report
								</MenuItem>
							</MenuList>
						</Portal>
					</Menu>
				</div>
			</div>

			<AlertDialogComponent
				header='Delete Post'
				body='Are you sure about deleting this post ?'
				as={MenuItem}
				isOpen={deleteDialogIsOpen}
				setIsOpen={setDeleteDialogIsOpen}
				submitBtnTitle="Yes, I'm sure"
				cancelBtnTitle='Cancel'
				onSubmit={DeleteHandler}>
				<div></div>
			</AlertDialogComponent>
		</>
	);
}
