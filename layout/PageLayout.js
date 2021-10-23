import { useWindowSize } from "rooks";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

// Components
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import RightBar from "../components/RightBar";

// Chakara-ui
import { Spinner } from "@chakra-ui/react";

export default function PageLayout({ children, isLoading }) {
	const Router = useRouter();
	const { innerWidth } = useWindowSize();

	// Variants for farmer motion
	const variants = {
		hidden: { opacity: 0, x: -200, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: -100 },
	};
	const BlackRouterList = ["/auth/sign-in", "/auth/sign-up"];

	return (
		<motion.div
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

					<h1 className='animate-pulse'>Loading...</h1>
					<p className='text-xs opacity-40'>Please, Wait a few seconds</p>
				</div>
			) : (
				<motion.div
					variants={variants} // Pass the variant object into Framer Motion
					initial='hidden' // Set the initial state to variants.hidden
					animate='enter' // Animated state to variants.enter
					exit='exit' // Exit state (used later) to variants.exit
					transition={{ type: "linear" }} // Set the transition to linear
					className='w-full overflow-x-auto'>
					{children}
				</motion.div>
			)}
		</motion.div>
	);
}
