import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

const Navigation: FC = () => {
	const pathname = usePathname()

	return (
		<>
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
		</>
	)
}

export default Navigation
