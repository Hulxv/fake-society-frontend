import { Button } from "@chakra-ui/react";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
	const Router = useRouter();
	return (
		<>
			<Head>
				<title>Page Not Found</title>
			</Head>

			<div
				className={
					"w-full h-screen flex flex-col items-center justify-center space-y-8"
				}>
				<div
					className={`bg-black bg-opacity5 w-96 px-4 pb-8 pt-2 rounded-tl-2xl rounded-br-2xl flex flex-col items-start space-y-8 font-azeret-mono text-green-700`}>
					<p className={"text-xs self-center"}>{"<terminal>"}</p>
					<h1>$ cd {`"${Router.asPath}"`}</h1>
					<div>
						<h1></h1>
						<div>
							---{">"} 404: no such page, to return click on {"'Back Home'"} or{" "}
							<Link href='/'>
								<a
									className={
										"underline text-green-400 hover:text-green-600 transition duration-200"
									}>
									here
								</a>
							</Link>
						</div>
					</div>
				</div>
				<button
					className={
						"bg-black text-green-700 font-azeret-mono p-3 rounded-lg hover:bg-opacity-90 hover:text-green-600 transition duration-300 capitalize"
					}
					onClick={() => Router.push("/")}>
					back home
				</button>
			</div>
		</>
	);
}
