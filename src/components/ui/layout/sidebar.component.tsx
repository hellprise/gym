'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

import { Icon } from '@/components/ui/icon'

import { toggleSidebar } from '@/services'

import { useAppDispatch, useTypedSelector } from '@/hooks'

import { ROUTES } from '@/utils'

const navList = [
	{
		name: 'Exercises',
		href: `/${ROUTES.EXERCISES}`
	},
	{
		name: 'Gyms',
		href: `/${ROUTES.GYMS}`
	},
	{
		name: 'Programs',
		href: `/${ROUTES.PROGRAMS}`
	}
]

export const Sidebar: FC = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const pathname = usePathname()

	const { openSidebar, currentUser } = useTypedSelector(({ user }) => user)

	const dispatch = useAppDispatch()

	const toggleSidebarWidth = () => {
		setIsSidebarOpen(prev => !prev)
	}

	useEffect(() => {
		dispatch(toggleSidebar(isSidebarOpen))

		document.body.classList.add(...['transition-all', 'duration-300'])
		document.body.classList.toggle('grid-layout__open', openSidebar)
		document.body.classList.toggle('grid-layout__close', !openSidebar)
	}, [isSidebarOpen, openSidebar])

	// if (!currentUser) return

	return (
		<aside
			className={clsx('fixed bottom-0 left-0 top-0 flex h-full flex-col bg-black p-3 transition-all duration-300', {
				'w-1/5': openSidebar,
				'w-[5%]': !openSidebar
			})}
		>
			<section
				className={clsx('flex items-center', {
					'mb-12 justify-between': openSidebar,
					'justify-end': !openSidebar
				})}
			>
				<Link
					href={ROUTES.HOME}
					className={clsx('flex items-center gap-1 text-white transition-opacity duration-300', {
						'invisible opacity-0': !openSidebar,
						'visible opacity-100': openSidebar
					})}
				>
					<Icon icon='gym' className='text-4xl' />

					<span className='text-3xl'>
						gym
						<p className='inline-block text-yellow-300'>i</p>
					</span>

					{/* create here an animation with two words: "find" and "gym". спочатку буде gym, воно буде статичне, а find буде виходити зі слова gym (opacity + translate-x) а потім рухатиметься знову до слова gym, і, коли літера "і" дійде до gym - інші букви будуть зникати. тобто, коли дійшла літера f - зникає вона. далі доходить літера "і" - вона залишається, а всі інші після неї - зникають. + і буде іншого кольору, аніж gym */}
				</Link>

				<button onClick={toggleSidebarWidth} className='w-fit rounded-full border border-gray-1 p-2'>
					<Icon
						icon='arrow-left'
						className={clsx('text-3xl text-white transition-transform duration-300', {
							'rotate-0': openSidebar,
							'rotate-180': !openSidebar
						})}
					/>
				</button>
			</section>

			<nav
				className={clsx('flex flex-col gap-3 px-7 transition-opacity duration-300', {
					'invisible opacity-0': !openSidebar,
					'visible opacity-100': openSidebar
				})}
			>
				{navList.map(link => {
					const isActive = pathname === link.href

					return (
						<Link
							className={clsx('group relative w-fit md:text-lg', {
								'text-yellow-300': isActive,
								'text-white': !isActive
							})}
							href={link.href}
							key={link.name}
						>
							<span>{link.name}</span>

							<p
								className={clsx('absolute left-0 top-1/2 h-0.5 w-0 transition-all duration-300 group-hover:w-full', {
									'bg-yellow-300': isActive,
									'bg-primary': !isActive
								})}
							/>
						</Link>
					)
				})}
			</nav>

			<section
				className={clsx('mt-10 px-7 transition-opacity duration-300 md:mt-20', {
					'invisible opacity-0': !openSidebar,
					'visible opacity-100': openSidebar
				})}
			>
				<h3 className='mb-3 text-xl text-white'>Follow us</h3>

				<div className='flex gap-3'>
					<Link href='https://www.facebook.com' passHref>
						<Icon
							icon='facebook'
							className='text-3xl text-white transition-colors duration-300 hover:text-yellow-300'
						/>
					</Link>

					<Link href='https://www.instagram.com' passHref>
						<Icon
							icon='instagram'
							className='text-3xl text-white transition-colors duration-300 hover:text-yellow-300'
						/>
					</Link>

					<Link href='https://www.twitter.com' passHref>
						<Icon icon='twitter' className='text-3xl text-white transition-colors duration-300 hover:text-yellow-300' />
					</Link>
				</div>
			</section>
		</aside>
	)
}
