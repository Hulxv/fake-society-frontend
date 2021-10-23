import { useState, useRef } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Auth";

// Lottie Component (For Animated Icons)
import Lottie from "react-lottie";

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
	Box,
} from "@chakra-ui/react";

// Flatpickr (Used in birthday input)
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

// Components (To signup by google or facebook)
import Providers from "../../../components/Providers";

// Icons
import { HiEyeOff, HiEye, HiOutlineCalendar } from "react-icons/hi";

// Animated Fingerpring icon
import * as FingerprintAnimateIcon from "../../../assets/fingerprint-animate-icon.json";

export default function Signup() {
	const [seePassword, setSeePassword] = useState(false);
	const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
	const { user, signup } = useAuth();

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		reset,
		setValue,
	} = useForm();

	function SignUpHandle(data) {
		signup(data);
		reset("");
	}
	return (
		<div
			className={
				"relative h-full py-8 min-h-screen w-full items-center flex  justify-center "
			}>
			<form
				onSubmit={handleSubmit(SignUpHandle)}
				className={
					"w-100 ring-1 ring-black ring-opacity-10 shadow-lg bg-white flex flex-col items-center py-4 justify-center p-6 py-8 space-y-8 rounded-3xl  "
				}>
				<div
					className={
						"p-2 rounded-2xl  flex justify-center items-center bg-opacity-10"
					}>
					<Box
						bgColor='teal.400'
						display='flex'
						justifyItems='center'
						alignItems='cetner'
						// padding={0.01}
						rounded='full'>
						<Lottie
							options={{
								animationData: FingerprintAnimateIcon,
							}}
							height={100}
							width={100}
						/>
					</Box>
				</div>
				<Heading as={"h5"}>Sign Up</Heading>
				<div className={"flex flex-col items-center space-y-4"}>
					<div>
						<Providers />
					</div>
					<div className={"flex flex-col items-center"}>
						{errors.username && (
							<p className='text-red-500 text-xs'>{errors.username?.message}</p>
						)}
						<Input
							variant='filled'
							type='text'
							placeholder='Username'
							width={"full"}
							{...register("username", {
								required: "this field is required",
							})}
						/>
					</div>
					<div className={"flex flex-col items-center"}>
						{errors.email && (
							<p className='text-red-500 text-xs'>{errors.email?.message}</p>
						)}
						<Input
							variant='filled'
							type='email'
							placeholder='Email'
							width={"full"}
							{...register("email", {
								required: "this field is required",
							})}
						/>
					</div>
					<div className={"flex flex-col items-center relative "}>
						{errors.password?.type === "minLength" ? (
							<p className='text-red-500 text-xs'>
								Password length must be greater than or equal 4 character
							</p>
						) : errors.password?.type === "required" ? (
							<p className='text-red-500 text-xs'>{errors.password?.message}</p>
						) : (
							<p className='text-red-500 text-xs'>{errors.password?.message}</p>
						)}
						<InputGroup width={300}>
							<Input
								placeholder='Password'
								type={`${seePassword ? "text" : "password"}`}
								variant={"filled"}
								{...register("password", {
									required: "this field is required",
									minLength: 4,
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
					<div className={"flex items-start relative flex-col items-center"}>
						{errors["confirm-password"]?.type === "minLength" ? (
							<p className='text-red-500 text-xs'>
								Password length must be greater than or equal 4 character
							</p>
						) : errors["confirm-password"]?.type === "required" ? (
							<p className='text-red-500 text-xs'>
								{errors["confirm-password"]?.message}
							</p>
						) : (
							<p className='text-red-500 text-xs'>
								{errors["confirm-password"]?.message}
							</p>
						)}
						<InputGroup width={300}>
							<Input
								placeholder='Confrim Password'
								type={`${seeConfirmPassword ? "text" : "password"}`}
								variant={"filled"}
								{...register("confirm-password", {
									required: "this field is required",
									minLength: 4,
								})}
							/>
							<InputRightElement>
								<IconButton
									icon={
										!seeConfirmPassword ? (
											<HiEye size={"1.5em"} />
										) : (
											<HiEyeOff size={"1.5em"} />
										)
									}
									onClick={() => setSeeConfirmPassword(!seeConfirmPassword)}
									variant='none'
								/>
							</InputRightElement>
						</InputGroup>
					</div>
					<div className='flex flex-col items-center'>
						{errors.gender && (
							<p className='text-red-500 text-xs'>{errors.gender?.message}</p>
						)}
						<Select
							placeholder={"Gender"}
							width={300}
							{...register("gender", {
								required: "this field is required",
							})}>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
							<option value={null}>I prefer not to say</option>
						</Select>
					</div>
					<div className='flex flex-col items-center'>
						{errors.gender && (
							<p className='text-red-500 text-xs'>{errors.birthday?.message}</p>
						)}
						<BirthdayInput register={register} setValue={setValue} />
					</div>
				</div>

				<Button
					type={"submit"}
					variant='solid'
					colorScheme='teal'
					isLoading={isSubmitting}
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

function BirthdayInput({ register, setValue }) {
	const [selectedBirthday, setSelectedBirthday] = useState("");
	const ref = useRef("");

	return (
		<div className={"relative w-full  flex items-center"}>
			<Input
				variant='filled'
				width='full'
				placeholder='Birthday'
				{...register("birthday", {
					required: "This field is required",
				})}
			/>
			<div className='absolute right-2'>
				<HiOutlineCalendar size='1.3em' />
			</div>{" "}
			<Flatpickr
				value={selectedBirthday}
				onChange={([date]) => {
					setValue("birthday", date.toLocaleDateString());
				}}
				ref={ref}
				render={({ ...props }, ref) => {
					return (
						<input
							ref={ref}
							className={
								"h-full w-full bg-transparent p-4 cursor-pointer opacity-0 absolute "
							}
						/>
					);
				}}
			/>
		</div>
	);
}
