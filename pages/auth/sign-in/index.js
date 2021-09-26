import { useState } from "react";
import Link from "next/link";


// Chakra UI
import { 
	InputGroup, 
	Input, 
	InputRightElement, 
	FormLabel, 
	Button, 
	Heading, 
	Select, 
	IconButton,
} from "@chakra-ui/react";

// Components
import Providers from "../../../components/Providers";


// Icons
import {
	HiLockClosed,
	HiEyeOff,
	HiEye
} from 'react-icons/hi'


export default function Signin() {
	const [seePassword, setSeePassword] = useState(false);


	return (
		<div className={"h-screen w-full items-center flex justify-center"}>
			<form
				className={"w-100 ring-1 ring-black ring-opacity-10 shadow-xl bg-white flex flex-col items-center py-4 justify-center p-6 py-8 space-y-8 rounded-3xl"}>
				<div className={"p-2 rounded-2xl bg-black flex justify-center items-center bg-opacity-10"}>
					<HiLockClosed size={'2em'} />
				</div>
				<Heading as={"h5"}>Sign in</Heading>
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
						<InputGroup width={300}>
							
							<Input
								placeholder='Password'
								type={`${seePassword ? "text" : "password"}`}
								variant={"filled"}
								
							/>
							<InputRightElement>
								<IconButton
									icon = {
										!seePassword 
											? <HiEye size={'1.5em'}/>
											: <HiEyeOff size={'1.5em'}/>
									}
									onClick ={
										() => setSeePassword(!seePassword)
									}
									variant='none'
								/>
							</InputRightElement>

						</InputGroup>
					</div>
				</div>
				<div className={"flex justify-end w-80"}>
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
