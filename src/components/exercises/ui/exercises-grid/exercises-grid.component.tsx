// 'use client'
import clsx from 'clsx'

// import { useState } from 'react'
import { Exercise } from '@/components/exercises'

// import { Exercise } from '../exercise/exercise.component'

const list = [
	{
		id: 1,
		name: 'Bench Press',
		images: ['/assets/ex-1.jpg', '/assets/ex-1.jpg'],
		bodyPart: 'Chest',
		equipment: 'Barbell'
	},
	{
		id: 2,
		name: 'Bench Press',
		images: ['/assets/ex-2.jpg', '/assets/ex-2.jpg'],
		bodyPart: 'Shoulders',
		equipment: 'Barbell'
	},
	{
		id: 3,
		name: 'Bench Press',
		images: ['/assets/ex-3.jpg', '/assets/ex-3.jpg'],
		bodyPart: 'Arms',
		equipment: 'Barbell'
	},
	{
		id: 4,
		name: 'Bench Press',
		images: ['/assets/ex-1.jpg', '/assets/ex-1.jpg'],
		bodyPart: 'Legs',
		equipment: 'Barbell'
	},
	{
		id: 5,
		name: 'Bench Press',
		images: ['/assets/ex-2.jpg', '/assets/ex-2.jpg'],
		bodyPart: 'Chest',
		equipment: 'Barbell'
	},
	{
		id: 6,
		name: 'Bench Press',
		images: ['/assets/ex-3.jpg', '/assets/ex-3.jpg'],
		bodyPart: 'Shoulders',
		equipment: 'Barbell'
	},
	{
		id: 7,
		name: 'Bench Press',
		images: ['/assets/ex-1.jpg', '/assets/ex-1.jpg'],
		bodyPart: 'Knees',
		equipment: 'Barbell'
	},
	{
		id: 8,
		name: 'Bench Press',
		images: ['/assets/ex-2.jpg', '/assets/ex-2.jpg'],
		bodyPart: 'Chest',
		equipment: 'Barbell'
	},
	{
		id: 9,
		name: 'Bench Press',
		images: ['/assets/ex-3.jpg', '/assets/ex-3.jpg'],
		bodyPart: 'Shoulders',
		equipment: 'Barbell'
	},
	{
		id: 10,
		name: 'Bench Press',
		images: ['/assets/ex-1.jpg', '/assets/ex-1.jpg'],
		bodyPart: 'Quads',
		equipment: 'Barbell'
	}
]

export const ExercisesGrid = () => {
	// const [mode, setMode] = useState<'grid' | 'list'>('grid')

	// TODO: create modes and toggle between them in user reducer (called it like ExercisesListMode)

	return (
		<section className='mt-10 px-3 md:px-0 md:pr-5'>
			<div>{/* section with filters */}</div>

			<div
				className={clsx('grid grid-cols-5 gap-5', {
					// 'grid grid-cols-5': mode === 'grid',
					// 'flex flex-col': mode === 'list'
				})}
			>
				{list.map(exercise => (
					<Exercise key={exercise.id} exercise={exercise} mode={'grid'} />
				))}
			</div>
		</section>
	)
}
