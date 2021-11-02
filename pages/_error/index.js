import { Button, Heading } from "@chakra-ui/react";

import router, { useRouter } from "next/router";
import Head from "next/head";

// Lottie Component (For Animated Icons)
import Lottie from "react-lottie";
import * as ServerIcon from "../../assets/animated-icons/server.json";

export default function Error({ statusCode, errMessage, errCode }) {
	const Router = useRouter();

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
						animationData: ServerIcon,
					}}
					height={250}
					width={250}
				/>
				<Heading size='4xl' w='auto'>
					{statusCode}
				</Heading>
				<div className='opacity-70'>{errMessage ?? "Some Error Happend"}</div>

				<div className='opacity- underline text-red-800'>{errCode}</div>

				<Button colorScheme='blue' onClick={() => router.push("/")}>
					Back Home
				</Button>
			</div>
		</>
	);
}

export async function getServerSideProps({ res, err }) {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

	return { props: { statusCode } };
}
