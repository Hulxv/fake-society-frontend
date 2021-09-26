import Navigation from '../components/Navigation'
import Header from '../components/Header'
import RightBar from '../components/RightBar'


import {useWindowSize} from "rooks";
import { useRouter } from 'next/router'

export default function PageLayout({children}) {
	const Router = useRouter()
	const { innerWidth } =useWindowSize()

	const BlackRouterList = [
		'/auth/sign-in',
		'/auth/sign-up'
	]

	return (
		<div className={`font-ubuntu bg-background flex w-full items-center flex-col md:justify-between h-full md:items-start md:flex-row-reverse
			${
				BlackRouterList.indexOf(Router.pathname) < 0 
				? " "
				: ""
			}
		`}>
			<div className={' w-full md:w-auto'}>
				
				{ BlackRouterList.indexOf(Router.pathname) < 0 &&
					<>
						<Navigation/>
						<Header/>
						{
							
							(Router.pathname === '/' || innerWidth >= 768) 
							&& <RightBar />
						}
					</>
				}
			</div>

		
				{children}
			
			
		</div>
	)
}