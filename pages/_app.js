import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css"
import "tailwindcss/tailwind.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function App({ Component, pageProps }) {
	return (
		<>
			<Head>

				<title>Create Next App</title>
				<meta name='description' content='Social Media Web App' />
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>

				// Azeret Mono
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
				<link href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@500&display=swap" rel="stylesheet"/> 
				
				// Ubuntu
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>


				// Josefin Sans
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
				<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap" rel="stylesheet"/>

				<link rel="stylesheet" href="../styles/globals.css"/>
				<link rel='icon' href='/favicon.ico' />

			</Head>

			<body className={'bg-background'}>
	
				<div className={'font-ubuntu z-0 pl-16 px-4 '}>
					<ChakraProvider>
						<Component {...pageProps} />
					</ChakraProvider>
				</div>

			</body>
		</>
	);
}

export default App;
