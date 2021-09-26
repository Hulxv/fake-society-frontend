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
	const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

	return (
		<div className={" h-screen items-center flex justify-center"}>
			<form
				className={"w-100 ring-1 ring-black ring-opacity-10 shadow-lg flex flex-col items-center py-4 justify-center p-6 py-8 space-y-8 rounded-3xl"}>
				<div className={"p-2 rounded-2xl bg-black flex justify-center items-center bg-opacity-10"}>
					<HiLockClosed size={'2em'} />
				</div>
				<Heading as={"h5"}>Sign Up</Heading>
				<div className={"flex flex-col items-center space-y-4"}>
					<div>
						<Providers />
					</div>
					<div className={""}>
						<Input
							variant='filled'
							type='text'
							placeholder='Username'
							width={"300px"}
						/>
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
					<div className={"flex items-center relative "}>
						<InputGroup width={300}>
							
							<Input
								placeholder='Password'
								type={`${seeConfirmPassword ? "text" : "password"}`}
								variant={"filled"}
								
							/>
							<InputRightElement>
								<IconButton
									icon = {
										!seeConfirmPassword 
											? <HiEye size={'1.5em'}/>
											: <HiEyeOff size={'1.5em'}/>
									}
									onClick ={
										() => setSeeConfirmPassword(!seeConfirmPassword)
									}
									variant='none'
								/>
							</InputRightElement>

						</InputGroup>
					</div>
					<Select placeholder={'Gender'} width={300}>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value={null}>I prefer not to say</option>
					</Select>
				</div>
				
				<Button
					type={"submit"}
					variant='solid'
					colorScheme='teal'
					width={"300px"}>
					Sign up
				</Button>
				
				<Link href={"/auth/sign-in"}>
					<a
						className={
							"text-xs text-left cursor-pointer hover:text-indigo-800"
						}>
						{"Already have an account ?"}
					</a>
				</Link>
			</form>
		</div>
	);
}
