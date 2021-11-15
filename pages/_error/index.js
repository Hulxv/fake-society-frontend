import { Button, Heading } from "@chakra-ui/react";
import { HiHome, HiRefresh, HiOutlineKey, HiKey } from "react-icons/hi";

import router from "next/router";
import Head from "next/head";

// Lottie Component (For Animated Icons)
import Lottie from "react-lottie";
import * as ServerIcon from "../../assets/animated-icons/server.json";
import * as Roadblock from "../../assets/animated-icons/roadblock.json";

export default function Error({ statusCode, errMessage, errCode }) {
	return (
		<>
			<Head>
				<title>{statusCode}</title>
			</Head>

			<div
				className={
					"w-full  flex flex-col items-center justify-center space-y-4"
				}>
				<Lottie
					options={{
						animationData: statusCode === 401 ? Roadblock : ServerIcon,
					}}
					height={250}
					width={250}
				/>
				<Heading size='4xl' w='auto'>
					{statusCode}
				</Heading>
				<div className='flex flex-col items-center'>
					<div className='opacity-70 capitalize'>
						{errMessage ?? "Something went wrong or page not found"}
					</div>

					<div className='opacity- underline text-red-800'>{errCode}</div>
				</div>

				{statusCode === 401 ? (
					<Button
						colorScheme='blue'
						onClick={() => router.push("/auth/sign-in")}
						leftIcon={<HiKey />}>
						Sign in
					</Button>
				) : (
					<Button
						colorScheme='blue'
						onClick={() => router.push("/")}
						leftIcon={<HiHome />}>
						Back Home
					</Button>
				)}
				<Button
					varient='ghost'
					leftIcon={<HiRefresh />}
					onClick={() => router.replace(router.asPath)}
					size='sm'>
					Refresh
				</Button>
			</div>
		</>
	);
}

export async function getServerSideProps({ res, err }) {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

	return { props: { statusCode } };
}
