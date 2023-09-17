'use client'

import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import { AiOutlineInfo } from 'react-icons/ai'
import { GiMuscleUp } from 'react-icons/gi'
import { IoAddOutline, IoHeart, IoHeartOutline } from 'react-icons/io5'

import { Button, ButtonColor, IAddButtonProps } from '@/components/ui'

import { TypesWithClassName } from '@/types'

interface IBtnChildrenProps {
	iconClasses?: string
}

function FavoritesBtnChildren({ iconClasses }: IBtnChildrenProps) {
	return <>{true ? <IoHeartOutline className={iconClasses} /> : <IoHeart className={iconClasses} />}</>
}

function TrainingBtnChildren({ iconClasses }: IBtnChildrenProps) {
	return (
		<>
			<GiMuscleUp className={iconClasses} />
			{true && <IoAddOutline className={clsx(iconClasses, 'absolute left-0.5 top-4 z-[3] !text-3xl text-secondary')} />}
		</>
	)
}

export function AddButton({
	className,
	iconClasses,
	hint,
	btnType = 'favorites'
}: TypesWithClassName<IAddButtonProps>) {
	const [isHintVisible, setIsHintVisible] = useState(false)

	const toggleHintVisibility = () => {
		const timeout = setTimeout(() => setIsHintVisible(!isHintVisible), 800)

		return () => clearTimeout(timeout)
	}

	let ChildrenComponent: FC<IBtnChildrenProps> | null = null

	let btnColor: ButtonColor = 'yellow'

	switch (btnType) {
		case 'favorites':
			ChildrenComponent = FavoritesBtnChildren
			break

		case 'training':
			btnColor = 'blue'
			ChildrenComponent = TrainingBtnChildren
			break

		default:
			break
	}

	useEffect(() => {
		if (isHintVisible) {
			const timeout = setTimeout(() => setIsHintVisible(false), 2000)

			return () => clearTimeout(timeout)
		}
	}, [isHintVisible])

	if (ChildrenComponent) {
		return (
			<>
				<span
					className={clsx(
						'absolute -top-9 left-0 z-[3] flex items-center gap-1 rounded-md bg-secondary p-[6px] pl-1 transition-all duration-300',
						{
							'scale-100 opacity-0': !isHintVisible,
							'scale-110 opacity-100': isHintVisible
						}
					)}
				>
					<AiOutlineInfo className='text-lg' />

					<p className='text-xs normal-case leading-none text-primary'>{hint}</p>
				</span>

				<Button onMouseEnter={toggleHintVisibility} className={className} size='xs' color={btnColor}>
					<ChildrenComponent iconClasses={iconClasses} />
				</Button>
			</>
		)
	}

	return null
}
