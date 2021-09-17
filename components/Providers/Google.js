import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FcGoogle } from "react-icons/fc";
export default function Google() {
	return (
		<Button
			colorScheme={"linkedin"}
			leftIcon={<FcGoogle size={'1.7em'} />}
			width={"250px"}>
			Continue with Google
		</Button>
	);
}
