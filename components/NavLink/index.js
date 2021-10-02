// import { useState, useEffect } from
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function NavLink({ children, href, onActiveClassName, onNotActiveClassName}) {
	const router = useRouter()
	

	return (
		<Link href={href}>
			<a> 
				<div className={`${router.pathname === href ? onActiveClassName : onNotActiveClassName}`}>
					{ children } 
				</div>
			</a>
		</Link>
	)
}