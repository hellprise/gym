import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import { IconName } from '@/components/ui'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonColor = 'primary' | 'secondary' | 'border-primary' | 'border-secondary' | 'transparent'

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	size?: ButtonSize
	color?: ButtonColor
	icon?: IconName
}
