import App from "./_app";

// Components
import SideBar from '../components/SideBar'
import Header from '../components/Pages/Home/Header'

import useWindowSize from '../hooks/useWindowSize'

export default function Home() {
	const windowSize = useWindowSize()
	console.log("window size => ",windowSize)
	return (
		<div className={''}>

			<SideBar/>
			<Header/>

		</div>
	);
}
