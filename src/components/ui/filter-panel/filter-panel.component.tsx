'use client'

import { ChangeEvent, useState } from 'react'

import { Button, CategoriesList, DropdownList, IListItem, Input } from '@/components/ui'

type StateItem = {
	id: number
	name: string
	key: string
}

interface IFiltersState {
	sort: null | StateItem
	bodyPart: null | StateItem
	exerciseName: string
	targetMuscle: null | StateItem
	equipment: null | StateItem
}

const list = [
	{
		id: 1,
		name: 'Chest',
		slug: 'chest'
	},
	{
		id: 2,
		name: 'Back',
		slug: 'back'
	},
	{
		id: 3,
		name: 'Lower arms',
		slug: 'lower-arms'
	},
	{
		id: 4,
		name: 'Upper arms',
		slug: 'upper-arms'
	},
	{
		id: 5,
		name: 'Lower legs',
		slug: 'lower-legs'
	},
	{
		id: 6,
		name: 'Upper legs',
		slug: 'upper-legs'
	},
	{
		id: 7,
		name: 'Neck',
		slug: 'neck'
	},
	{
		id: 8,
		name: 'Shoulders',
		slug: 'shoulders'
	},
	{
		id: 9,
		name: 'Abs',
		slug: 'abs'
	}
]

const sortOptions = [
	{
		id: 1,
		name: 'Name (a-z)',
		key: 'name-asc'
	},
	{
		id: 2,
		name: 'Name (z-a)',
		key: 'name-desc'
	},
	{
		id: 3,
		name: 'Difficulty (easy-hard)',
		key: 'difficulty-asc'
	},
	{
		id: 4,
		name: 'Difficulty (hard-easy)',
		key: 'difficulty-desc'
	},
	{
		id: 5,
		name: 'Rating (low-high)',
		key: 'rating-asc'
	},
	{
		id: 6,
		name: 'Rating (high-low)',
		key: 'rating-desc'
	}
]

const bodyParts = [
	{
		id: 1,
		name: 'Back',
		key: 'back'
	},
	{
		id: 2,
		name: 'Chest',
		key: 'chest'
	},
	{
		id: 3,
		name: 'Lower arms',
		key: 'lower-arms'
	},
	{
		id: 4,
		name: 'Lower legs',
		key: 'lower-legs'
	},
	{
		id: 5,
		name: 'Neck',
		key: 'neck'
	},
	{
		id: 6,
		name: 'Shoulders',
		key: 'shoulders'
	},
	{
		id: 7,
		name: 'Upper arms',
		key: 'upper-arms'
	},
	{
		id: 8,
		name: 'Upper legs',
		key: 'upper-legs'
	},
	{
		id: 9,
		name: 'Waist',
		key: 'waist'
	}
]

const targetMuscles = [
	{
		id: 1,
		name: 'Biceps',
		key: 'biceps'
	},
	{
		id: 2,
		name: 'Calves',
		key: 'calves'
	},
	{
		id: 3,
		name: 'Delts',
		key: 'delts'
	},
	{
		id: 4,
		name: 'Abductors',
		key: 'abductors'
	},
	{
		id: 5,
		name: 'Abs',
		key: 'abs'
	}
]

const equipments = [
	{
		id: 1,
		name: 'Barbell',
		key: 'barbell'
	},
	{
		id: 2,
		name: 'Band',
		key: 'band'
	},
	{
		id: 3,
		name: 'Body weight',
		key: 'body-weight'
	},
	{
		id: 4,
		name: 'Cable',
		key: 'cable'
	}
]

export const FilterPanel = () => {
	const [filters, setFilters] = useState<IFiltersState>({
		sort: null,
		bodyPart: null,
		targetMuscle: null,
		equipment: null,
		exerciseName: ''
	})

	// const handleFilters = (filter: keyof IFiltersState, item: IListItem) => {
	const handleFilters = (filter: string, item: IListItem) => {
		setFilters(prev => ({
			...prev,
			[filter]: item
		}))
	}

	const handleExerciseName = (event: ChangeEvent<HTMLInputElement>) => {
		setFilters(prev => ({
			...prev,
			exerciseName: event.target.value
		}))
	}

	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()

		console.log('filters', filters)
	}

	return (
		<section className='mt-10 px-3 md:px-0 md:pr-5'>
			<CategoriesList list={list} />

			<form onSubmit={handleSubmit} className='flex gap-5 bg-gray-2 p-5'>
				{/* <SortOptions /> */}
				<DropdownList
					list={sortOptions}
					onClick={handleFilters}
					filter='sort'
					text={`Sort by: ${filters.sort ? filters.sort.name : ''}`}
				/>

				{/* filter by body part */}
				<DropdownList onClick={handleFilters} filter='bodyPart' list={bodyParts} text='Body part' />

				{/* filter by target muscle */}
				<DropdownList onClick={handleFilters} filter='targetMuscle' list={targetMuscles} text='Target muscle' />

				{/* filter by equipment */}
				<DropdownList onClick={handleFilters} filter='equipment' list={equipments} text='Equipment' />

				<section className='flex gap-3'>
					<Input
						className='filter-input'
						variant='placeholder'
						placeholder='Exercise name'
						value={filters.exerciseName}
						onChange={handleExerciseName}
					/>

					<Button color='transparent'>Show</Button>
				</section>
			</form>
		</section>
	)
}
