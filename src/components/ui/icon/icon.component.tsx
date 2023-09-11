import clsx from 'clsx'
import { FC } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import { CgGym } from 'react-icons/cg'
import { FaInstagram, FaSquareFacebook, FaTwitter } from 'react-icons/fa6'
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
			IconComponent = AiOutlineLeft
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

		case 'gym':
			IconComponent = CgGym
			break

		case 'facebook':
			IconComponent = FaSquareFacebook
			break

		case 'instagram':
			IconComponent = FaInstagram
			break

		case 'twitter':
			IconComponent = FaTwitter
			break

		default:
			break
	}

	if (IconComponent) {
		return <IconComponent className={clsx('transition-all duration-200', className)} {...props} />
	}

	return null
}
