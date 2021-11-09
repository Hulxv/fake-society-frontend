import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
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
			</Head>
			<ChakraProvider theme={theme}>
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
