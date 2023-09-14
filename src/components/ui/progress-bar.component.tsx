'use client'

import { FC, RefObject } from 'react'

import { useScrollPercent } from '@/hooks'

interface IProgressBarProps {
	roadmapRef: RefObject<HTMLDivElement>
}

export const ProgressBar: FC<IProgressBarProps> = ({ roadmapRef }) => {
	const scrollPercent = useScrollPercent(roadmapRef)

	return (
		<section
			className='fixed right-5 top-10 z-[2] max-h-[800px] w-1 bg-gradient-to-r from-black to-secondary'
			style={{ height: `${scrollPercent}%` }}
		/>
	)
}
