import { useState, useEffect } from 'react'

export default function useWindowWidth() {
	
	const [windowWidth, setWindowWidth] = useState(null);
	if(typeof window !== "undefined"){
		console.log(window)
		

		useEffect(() => {
			const GetWindowWidth = () => setWindowWidth(window.innerWidth);
			
			window.addEventListener('resize', GetWindowWidth)
			GetWindowWidth()
			return window.removeEventListener('resize',GetWindowWidth);
		}, [window.innerWidth])

	}

	
	return windowWidth;
}