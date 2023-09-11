'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

export const Sidebar: FC = () => {
	const pathname = usePathname()

	return (
		<section>
			{[
				{
					name: 'Login',
					href: 'login'
				},
				{
					name: 'Register',
					href: 'register'
				}
			].map(link => {
				const isActive = pathname === link.href

				return (
					<Link className={isActive ? 'text-blue' : 'text-black'} href={link.href} key={link.name}>
						{link.name}
					</Link>
				)
			})}
		</section>
	)
}
