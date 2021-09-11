import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Facebook() {
	return (
		<Button
			colorScheme={"facebook"}
			leftIcon={<FontAwesomeIcon icon={faFacebook} className={"w-6"} />}
			width={"250px"}>
			Continue with Facebook
		</Button>
	);
}
