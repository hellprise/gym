'use client'

import { useRef } from 'react'

import { ProgressBar } from '@/components/ui'

export const UserRoadmap = () => {
	const userRoadmapRef = useRef<HTMLDivElement>(null)

	return (
		<div className='mt-24' id='user-roadmap' ref={userRoadmapRef}>
			<ProgressBar roadmapRef={userRoadmapRef} />

			<h1 className='mb-12 text-center text-5xl font-bold'>Learn what you need to do</h1>

			<section className='grid grid-cols-4 gap-x-2 gap-y-5 px-3 pb-20 md:px-0 md:pr-5'>
				<div className='col-start-2 col-end-4 flex justify-center rounded-3xl bg-gray-2 p-10'>
					<h2 className='text-center text-3xl font-bold'>Authenticate</h2>
				</div>

				<div className='col-start-1 col-end-5 row-start-2 flex justify-center rounded-3xl bg-gray-2 p-10'>
					<h2 className='text-center text-4xl font-bold'>
						Check out the list of exercises <br /> or add your own
					</h2>
				</div>

				<div className='col-start-3 col-end-5 row-start-3 flex translate-y-3 -rotate-2 justify-center rounded-3xl bg-gray-2 p-10'>
					<h2 className='text-center text-2xl font-bold'>
						Explore existing training programs or create your own program
					</h2>
				</div>

				<div className='col-start-1 col-end-3 row-start-3 flex h-fit translate-y-8 rotate-[5deg] justify-center rounded-3xl bg-gray-2 p-10'>
					<h2 className='text-center text-2xl font-bold'>Сheck the availability of free gyms</h2>
				</div>
			</section>
		</div>
	)
}
