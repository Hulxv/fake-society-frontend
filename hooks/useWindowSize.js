import { useState, useEffect } from 'react'

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState(window?.innerWidth);
	

	const GetWindowWidth = () => {
		setWindowSize(window?.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', GetWindowWidth)
		GetWindowWidth()
		return window.removeEventListener('resize',GetWindowWidth);
	}, [window?.innerWidth])

	return windowSize;
}