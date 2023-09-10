import clsx from 'clsx'
import { FC } from 'react'
import { BiArrowBack, BiMenuAltRight } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { IoSearch } from 'react-icons/io5'

import { IIconProps } from './icon.interface'

// const iconVariants = new Map([
// 	['chevron-down', <BsChevronDown key={getGuid()} />]
// ])

// const getIcon = (name: string) => {
// 	iconVariants.get(name) as JSX.Element
// }

// export const Icon: FC<IIconProps> = ({ icon, className, ...props }) => {
// 	return (
// 		<>
// 		{getIcon(icon)}
// 		</>
// 	)
// }

export const Icon: FC<IIconProps> = ({ icon = 'chevron-down', className, ...props }) => {
	let IconComponent: FC<IIconProps> | null = null

	switch (icon) {
		case 'chevron-down':
			IconComponent = BsChevronDown
			break

		case 'arrow-left':
			IconComponent = BiArrowBack
			break

		case 'close':
			IconComponent = GrClose
			break

		case 'search':
			IconComponent = IoSearch
			break

		case 'hamburger':
			IconComponent = BiMenuAltRight
			break

		default:
			break
	}

	if (IconComponent) {
		return <IconComponent className={clsx('transition-all duration-200', className)} {...props} />
	}

	return null
}
