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
import { format, formatDistanceToNow } from "date-fns";
import router from "next/router";

import {
	HiOutlineDotsHorizontal,
	HiShieldExclamation,
	HiOutlineBookmark,
	HiOutlineUserRemove,
	HiOutlineTrash,
} from "react-icons/hi";

export default function PostHead({
	Username,
	AvatarImage,
	ShareDate,
	group,
	UserID,
}) {
	return (
		<div className={"flex justify-between items-center w-full"}>
			<div
				className='flex space-x-2 self-start justify-start items-center cursor-pointer'
				onClick={() => router.push(`/profile/${UserID}`)}>
				<div>
					<Avatar
						name={Username ?? ""}
						src={AvatarImage ?? ""}
						loading={"lazy"}
					/>
				</div>
				<div className='flex flex-col items-start'>
					<div className={"flex items-center space-x-1"}>
						<span>{Username ?? ""}</span>

						<Badge size={"sm"} colorScheme={"teal"}>
							{group ?? ""}
						</Badge>
					</div>
					<span className={"text-black text-opacity-40 text-xs"}>
						{formatDistanceToNow(new Date(ShareDate ?? new Date()))}
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
							<MenuItem
								as={Button}
								variant={"ghost"}
								leftIcon={<HiOutlineTrash size={"1.2em"} />}>
								Delete
							</MenuItem>
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
	);
}
