import {
	Button
} from '@chakra-ui/react'

import {useRouter} from 'next/router'
import Head from 'next/head'

export default function NotFound() {
	const Router = useRouter()

	return (
		<>
		<Head>
			<title>Page Not Found</title>
		</Head>

		<div className={'w-full h-134 flex flex-col items-center justify-center space-y-8'}>
			<div className={'w-full divide-black divide-x space-x-3 flex items-center justify-center'}>
				<h1 className="text-2xl text-red-600">404</h1>
				<div className={'p-2'}>Page could not found</div>
			</div>
			<Button
				colorScheme={'telegram'}
				onClick={() => Router.push('/')}
			>
				Back Home
			</Button>
		</div>
		</>
	)
}