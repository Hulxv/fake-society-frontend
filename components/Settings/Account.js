import ChangeAvatar from "./ChangeAvatar";
import DeleteAccount from "./DeleteAccountDialogAlert";
import EditableUsername from "./EditUsername";

import {
	useEditableControls,
	Button,
	Input,
	Avatar,
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	IconButton,
} from "@chakra-ui/react";

// Icons
import { HiIdentification } from "react-icons/hi";

export default function Account() {
	return (
		<div className={"flex flex-col items-start space-y-6"}>
			<div className={"flex items-center space-x-5"}>
				<ChangeAvatar />

				<EditableUsername />
			</div>

			<Button width={"100%"} leftIcon={<HiIdentification size='1.4em' />}>
				Personal Informations
			</Button>
			<DeleteAccount />
		</div>
	);
}
