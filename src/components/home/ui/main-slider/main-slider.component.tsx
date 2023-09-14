import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui'

import { ROUTES } from '@/utils'

export const MainSlider = () => {
	return (
		<div>
			{[''].map((slide, index) => (
				<section className='relative mb-36 mt-10 flex justify-center px-3 md:px-0 md:pr-5' key={index}>
					<div
						className='relative flex h-[700px] w-full items-center justify-end'
						// style={{
						// 	backgroundImage: `url(${'https://plus.unsplash.com/premium_photo-1663036263525-3059e0c47b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2992&q=100'})`
						// }}
					>
						<Image
							className='z-0 rounded-3xl object-cover brightness-50 filter'
							src='https://plus.unsplash.com/premium_photo-1663036263525-3059e0c47b96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2992&q=80'
							priority
							alt='bg main slider image'
							fill
						/>

						<section className='relative z-[1] mb-36 pr-20'>
							<h1 className='text-right text-5xl font-bold text-white'>
								Find your <br /> perfect gym
							</h1>
						</section>
					</div>

					<div className='absolute -bottom-16 mx-auto flex w-10/12 flex-col items-center rounded-3xl bg-secondary/80 p-10'>
						<span className='text-center text-lg font-thin text-primary'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis exercitationem quasi totam, mollitia
							iste ab porro omnis fuga impedit animi soluta, saepe nostrum recusandae dignissimos adipisci iure unde
							facilis aliquid.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						</span>

						<Link className='mt-5' href={ROUTES.HOME}>
							<Button color='border-primary'>Open</Button>
						</Link>
					</div>
				</section>
			))}
		</div>
	)
}
