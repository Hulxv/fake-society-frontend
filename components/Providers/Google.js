import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Google() {
	return (
		<Button
			colorScheme={"blue"}
			leftIcon={<FontAwesomeIcon icon={faGoogle} className={"w-6"} />}
			width={"250px"}>
			Continue with Google
		</Button>
	);
}
