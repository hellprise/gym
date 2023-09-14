import Link from 'next/link'

import { CoverImage } from '@/components/home'

import { ROUTES } from '@/utils'

export const Grid = () => {
	return (
		<section className='md: my-10 grid grid-cols-3 grid-rows-2 gap-5 px-3 md:px-0 md:pr-5'>
			<div className='group relative row-start-1 row-end-3 flex flex-col justify-between rounded-3xl bg-primary px-10 py-7'>
				<section className='absolute inset-0 z-[0] rounded-3xl bg-primary blur-[2px] filter' />

				<CoverImage
					className='h-full'
					filter='brightness'
					imageUrl='https://images.unsplash.com/photo-1578874691223-64558a3ca096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80'
					width={3024}
					height={4032}
					priority={true}
					alt='find your gym cover image'
				/>

				<h2 className='relative z-[1] mt-5 text-center text-3xl font-bold leading-tight text-secondary'>
					<Link href={ROUTES.GYMS}>Find your gym</Link>
				</h2>
			</div>

			<div className='group h-80 rounded-3xl bg-primary px-7 py-5'>
				<CoverImage
					className='h-[72%]'
					filter='brightness'
					imageUrl='https://images.unsplash.com/photo-1596357395217-80de13130e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80'
					width={2971}
					height={1980}
					alt='check our exercise list cover image'
				/>

				<h2 className='relative z-[1] mt-5 text-center text-2xl font-bold leading-tight text-secondary'>
					<Link href={ROUTES.EXERCISES}>
						Check our <br /> exercises list
					</Link>
				</h2>
			</div>

			<div className='group flex items-center justify-center rounded-3xl bg-primary px-10 py-7'>
				<h2 className='relative z-[1] text-center text-2xl font-bold leading-tight text-secondary transition-colors duration-200 group-hover:text-yellow-300'>
					<Link href='#user-roadmap'>
						Show me <br /> what I need to do
					</Link>
				</h2>
			</div>

			<div className='group col-start-2 col-end-4 flex flex-col items-center justify-center rounded-3xl bg-primary px-10 py-7 uppercase'>
				<h2 className='relative z-[1] text-center text-5xl font-bold leading-tight text-secondary'>
					<Link href={ROUTES.PROGRAMS}>
						customize your <br /> <p className='inline-block'>training program</p>
					</Link>
				</h2>

				<svg
					className='-translate-x-20 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'
					height={3}
					width={467}
					xmlns='http://www.w3.org/2000/svg'
				>
					<line x1='0' y1='2' x2='467' y2='2' stroke='black' width={2} />
				</svg>
			</div>
		</section>
	)
}
