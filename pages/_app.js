import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Router from "next/router";

// Layout
import PageLayout from "/layout/PageLayout";

// Styles
import "../styles/globals.css";

// Tailwindcss
import "tailwindcss/tailwind.css";

// Zoom Image css style
import "react-medium-image-zoom/dist/styles.css";
import AuthProvider from "../Auth";
import { useState } from "react";

function App({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(false);
	Router.events.on("routeChangeStart", (url) => {
		setIsLoading(true);
	});
	Router.events.on("routeChangeComplete", (url) => {
		setIsLoading(false);
	});

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
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@500&display=swap'
					rel='stylesheet'
				/>

				{/*Ubuntu*/}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap'
					rel='stylesheet'
				/>
				<link rel='preconnect' href='https://fonts.gstatic.com' />
			</Head>
			<ChakraProvider>
				<AuthProvider>
					<PageLayout isLoading={isLoading}>
						<Component {...pageProps} />
					</PageLayout>
				</AuthProvider>
			</ChakraProvider>
		</>
	);
}

export default App;
