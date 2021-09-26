import { Button } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";

export default function Facebook() {
	return (
		<Button
			colorScheme={"facebook"}
			leftIcon={<FaFacebook size={'1.7em'} />}
			width={"300px"}>
			Continue with Facebook
		</Button>
	);
}
