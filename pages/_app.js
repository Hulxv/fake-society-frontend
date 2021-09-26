import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import PageLayout from '/layout/PageLayout'
import { useRouter } from 'next/router'

// Styles
import "../styles/globals.css"

// Tailwindcss
import "tailwindcss/tailwind.css";


// Zoom Image css style
import 'react-medium-image-zoom/dist/styles.css'

function App({ Component, pageProps }) {
	const Router = useRouter()

	const BlackRouterList = [
		'/auth/sign-in',
		'/auth/sign-up'
	]

	return (
		<>
			<Head>

				<title>Fake Society</title>
				<meta name='description' content='Social Media Web App' />
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>

				{/*Azeret Mono*/}
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@500&display=swap" rel="stylesheet"/> 
				
				 {/*Ubuntu*/}
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />


				

			</Head>

			
			<body className={`font-ubuntu bg-background 
					${
						BlackRouterList.indexOf(Router.pathname) < 0 
						? "sm:pl-16 px-4 py-20 pb-24 sm:pb-4"
						: "m-8"
					}
				`}>
				
				<ChakraProvider>
					<PageLayout>
						<Component {...pageProps} />
					</PageLayout>
				</ChakraProvider>
			</body>
				

			
		</>
	);
}

export default App;
