import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { ICoverImageProps } from '@/components/home'

import { TypesWithClassName } from '@/types'

export const CoverImage: FC<TypesWithClassName<ICoverImageProps>> = ({ imageUrl, className, filter, ...props }) => {
	return (
		<div className={clsx('overflow-hidden rounded-3xl', className)}>
			<Image
				className={clsx(
					'relative z-[1] h-full rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110',
					{
						'blur-sm filter': filter === 'blur',
						'brightness-75 filter': filter === 'brightness'
					}
				)}
				src={imageUrl}
				{...props}
			/>
		</div>
	)
}
