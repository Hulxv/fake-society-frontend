// import { useState, useEffect } from
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function NavLink({ children, href, onActiveClassName}) {
	const router = useRouter()
	

	return (
		<Link href={href}>
			<div className={router.pathname === href && onActiveClassName}>
				<a> { children } </a>
			</div>
		</Link>
	)
}