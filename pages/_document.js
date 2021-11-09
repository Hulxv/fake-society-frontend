import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
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
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
