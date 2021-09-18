import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css"
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
	return (
		<>
			<Head>

				<title>Social Media App</title>
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

			<body className={'bg-background'}>
	
				<div className={'font-ubuntu z-0 sm:pl-16 px-4 '}>
					<ChakraProvider>
						<Component {...pageProps} />
					</ChakraProvider>
				</div>

			</body>
		</>
	);
}

export default App;
