import { useState } from "react";
import Link from "next/link";
// Chakra UI
import { Input, FormLabel, Button, Heading } from "@chakra-ui/react";

// Components
import Providers from "../../../components/Providers";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEye,
	faEyeSlash,
	faKey,

} from "@fortawesome/free-solid-svg-icons";



export default function Signin() {
	const [seePassword, setSeePassword] = useState(false);


	return (
		<div className={" h-screen items-center flex justify-center"}>
			<form
				className={
					"w-96 shadow-xl flex flex-col items-center py-4 justify-center p-6 space-y-8 rounded-3xl"
				}>
				<div
					className={
						"p-2 rounded-2xl bg-black flex justify-center items-center bg-opacity-10"
					}>
					<FontAwesomeIcon icon={faKey} size={'3x'} className={'opacity-80'}/>
				</div>
				<Heading as={"h5"}>Login</Heading>
				<div className={"flex flex-col items-center space-y-4"}>
					<div>
						<Providers />
					</div>
					<div className={""}>
						<Input
							variant='filled'
							type='email'
							placeholder='Email'
							width={"300px"}
						/>
					</div>
					<div className={"flex items-center relative "}>
						<Input
							placeholder='Password'
							type={`${seePassword ? "text" : "password"}`}
							variant={"filled"}
							width={"300px"}
						/>

						<FontAwesomeIcon
							icon={seePassword ? faEyeSlash : faEye}
							className={"absolute right-1 w-5"}
							onClick={() => setSeePassword(!seePassword)}
						/>
					</div>
				</div>
				<div className={"flex justify-end w-full"}>
					<p
						className={
							"text-xs text-left cursor-pointer hover:text-indigo-800"
						}>
						Forget password ?
					</p>
				</div>
				<div className={"w-52 flex items-center justify-center"}>
					<Button
						type={"submit"}
						variant='solid'
						colorScheme='teal'
						width={"200px"}>
						Login
					</Button>
				</div>

				<Link href={"/auth/sign-up"}>
					<a
						className={
							"text-xs text-left cursor-pointer hover:text-indigo-800"
						}>
						{"Don't have an account ?"}
					</a>
				</Link>
			</form>
		</div>
	);
}
