import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Auth";

// Lottie Component (For Animated Icons)
import Lottie from "react-lottie";

// Chakra UI
import {
	InputGroup,
	Input,
	InputRightElement,
	Button,
	Heading,
	IconButton,
	Box,
} from "@chakra-ui/react";

// Components
import Providers from "../../../components/Providers";
// Icons
import { HiLockClosed, HiEyeOff, HiEye } from "react-icons/hi";
import * as FingerprintAnimateIcon from "../../../assets/animated-icons/fingerprint-animate-icon.json";

export default function Signin() {
	const [seePassword, setSeePassword] = useState(false);
	const Router = useRouter();
	const { user, signin } = useAuth();

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm();

	async function SignInHandle(data) {
		try {
			const res = await signin(data);
			Router.push("/");
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div
			className={
				"relative h-full py-8 min-h-screen w-full items-center flex  justify-center"
			}>
			<form
				onSubmit={handleSubmit(SignInHandle)}
				className={
					"w-100 ring-1 ring-black ring-opacity-10 shadow-lg bg-white flex flex-col items-center py-4 justify-center px-10  space-y-8 rounded-3xl "
				}>
				<Box
					bgColor='teal.400'
					display='flex'
					justifyItems='center'
					alignItems='cetner'
					padding={0.1}
					rounded='full'>
					<Lottie
						options={{
							animationData: FingerprintAnimateIcon,
						}}
						height={70}
						width={70}
					/>
				</Box>

				<Heading as={"h5"}>Sign in</Heading>
				<div style={{ width: "300px" }} className='flex flex-col space-y-4'>
					<div className={"flex w-full flex-col items-center space-y-4"}>
						<Providers />

						<div className={"flex items-start w-full flex-col space-y-1"}>
							{errors.email && (
								<p className='text-red-500 text-xs'>{errors.email?.message}</p>
							)}
							<Input
								isInvalid={errors.email}
								variant='filled'
								type='email'
								placeholder='Email'
								width={"full"}
								{...register("email", {
									required: "this field is required",
								})}
							/>
						</div>
						<div
							className={"flex items-start w-full relative flex-col space-y-1"}>
							{errors.password && (
								<p className='text-red-500 text-xs'>
									{errors.password?.message}
								</p>
							)}
							<InputGroup width={300}>
								<Input
									placeholder='Password'
									type={`${seePassword ? "text" : "password"}`}
									variant={"filled"}
									{...register("password", {
										required: "this field is required",
										minLength: {
											value: 4,
											message:
												"Password length must be greater than or equal 4 character",
										},
									})}
								/>
								<InputRightElement>
									<IconButton
										icon={
											!seePassword ? (
												<HiEye size={"1.5em"} />
											) : (
												<HiEyeOff size={"1.5em"} />
											)
										}
										onClick={() => setSeePassword(!seePassword)}
										variant='none'
									/>
								</InputRightElement>
							</InputGroup>
						</div>
					</div>
					<div className={"flex justify-end self-end"}>
						<p
							className={
								"text-xs text-left cursor-pointer hover:text-indigo-800"
							}>
							Forget password ?
						</p>
					</div>
					<div className={"w-full flex items-center justify-center"}>
						<Button
							type={"submit"}
							isLoading={isSubmitting}
							variant='solid'
							colorScheme='teal'
							width='full'>
							Login
						</Button>
					</div>
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
