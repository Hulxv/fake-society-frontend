import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "tailwindcss/tailwind.css";

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
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default App;
