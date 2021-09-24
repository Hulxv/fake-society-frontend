import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

// Styles
import "../styles/globals.css"

// Tailwindcss
import "tailwindcss/tailwind.css";


// Zoom Image css style
import 'react-medium-image-zoom/dist/styles.css'

function App({ Component, pageProps }) {
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

			<body className={'bg-background'}>
	
				<div className={'font-ubuntu sm:pl-16 px-4 py-20 pb-24 sm:pb-4'}>
					<ChakraProvider>
						<Component {...pageProps} />
					</ChakraProvider>
				</div>

			</body>
		</>
	);
}

export default App;
