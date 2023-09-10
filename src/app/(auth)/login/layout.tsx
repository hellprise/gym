import { PropsWithChildren } from 'react'

export default function LoginLayout({ children }: PropsWithChildren) {
	return (
		<section>
			{/* Include shared UI here e.g. a header or sidebar */}
			<nav>this is login layout</nav>

			{children}
		</section>
	)
}
