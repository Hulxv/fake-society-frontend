import { useWindowSize } from "rooks";
import { useRouter } from "next/router";

import Navigation from "../components/Navigation";
import Header from "../components/Header";
import RightBar from "../components/RightBar";

import { Spinner } from "@chakra-ui/react";

export default function PageLayout({ children, isLoading }) {
	const Router = useRouter();
	const { innerWidth } = useWindowSize();

	const BlackRouterList = ["/auth/sign-in", "/auth/sign-up"];

	return (
		<div
			className={`font-ubuntu bg-background flex w-full min-h-screen items-center flex-col md:justify-between h-full md:items-start md:flex-row-reverse relative
			
			${
				BlackRouterList.indexOf(Router.pathname) < 0 &&
				"sm:pl-16 px-4 py-20 pb-24 sm:pb-4"
			}
			`}>
			<div className={" w-full md:w-auto"}>
				{BlackRouterList.indexOf(Router.pathname) < 0 && (
					<>
						<Navigation />
						<Header />
						{(Router.pathname === "/" || innerWidth >= 768) && !isLoading && (
							<RightBar />
						)}
					</>
				)}
			</div>

			{isLoading ? (
				<div className='flex flex-col self-center items-center absolute space-y-4 inset-0 justify-center '>
					<Spinner size='xl' color='blue.500' />

					<h1>Loading...</h1>
					<p className='text-xs opacity-40'>Please, Wait a few seconds</p>
				</div>
			) : (
				children
			)}
		</div>
	);
}
