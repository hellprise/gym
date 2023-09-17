'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { IoBody } from 'react-icons/io5'

import { AddButton } from '@/components/ui'

export const Exercise = ({ exercise, mode }: { exercise: any; mode: 'grid' | 'list' }) => {
	const [isOverlayVisible, setIsOverlayVisible] = useState(false)

	const toggleOverlayVisibility = () => setIsOverlayVisible(prev => !prev)

	const overlayBtnClasses = 'group relative !rounded-full !border-none'

	const overlayIconClasses = 'text-4xl scale-100 transition-all duration-300 group-hover:scale-110'

	return (
		<div className=''>
			<section
				onMouseEnter={toggleOverlayVisibility}
				onMouseLeave={toggleOverlayVisibility}
				className={clsx('relative block h-3/4 cursor-pointer border border-transparent bg-primary px-7 py-5')}
			>
				<div
					className={clsx('absolute inset-0 z-[1] bg-black/40 transition-opacity duration-300', {
						'opacity-0': !isOverlayVisible,
						'opacity-100': isOverlayVisible
					})}
				/>

				<div
					className={clsx('absolute inset-0 z-[2] flex items-center justify-center transition-opacity duration-300', {
						'opacity-0': !isOverlayVisible,
						'opacity-100': isOverlayVisible
					})}
				>
					{isOverlayVisible && (
						<div className='relative flex items-center gap-5 text-white'>
							<AddButton className={overlayBtnClasses} iconClasses={overlayIconClasses} hint='Add to favorites' />

							<AddButton
								className={clsx('flex items-center justify-center', overlayBtnClasses)}
								iconClasses={overlayIconClasses}
								btnType='training'
								hint='Add to program'
							/>
						</div>
					)}
				</div>

				<Image
					className={clsx('h-full max-h-[250px] object-cover opacity-80', {
						// 'object-none': exercise.id <= 3,
						// 'object-contain': exercise.id > 3 && exercise.id <= 6
					})}
					src={exercise.images[0]}
					alt={exercise.name}
					width={735}
					height={680}
					priority={true}
					// fill
				/>
			</section>

			<section className='mt-1'>
				<h3 className='mb-1 font-bold'>{exercise.name}</h3>

				<div className='flex items-center gap-[6px]'>
					<IoBody className='text-lg' />

					<span className='text-sm underline underline-offset-2'>{exercise.bodyPart}</span>
				</div>
			</section>
		</div>
	)
}
