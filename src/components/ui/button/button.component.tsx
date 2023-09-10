import clsx from 'clsx'
import { FC } from 'react'

import { Icon } from '@/components'

import { IButtonProps } from './button.interface'

export const Button: FC<IButtonProps> = ({ className, icon, children, size = 'md', color = 'primary', ...props }) => {
	return (
		<button
			className={clsx('rounded-xl border-2 font-medium uppercase transition-all duration-200', className, {
				'px-5 py-2 text-lg': size === 'lg',
				'px-4 py-2': size === 'md',
				'px-2 py-1 text-sm': size === 'sm',
				'border-primary bg-primary text-secondary hover:border-secondary hover:bg-secondary hover:text-primary':
					color === 'primary',
				'bg-secondary text-white hover:bg-white hover:text-secondary': color === 'secondary',
				'border-white bg-transparent text-white hover:border-gray-1 hover:bg-gray-1 hover:text-secondary':
					color === 'border-primary',
				'border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white':
					color === 'border-secondary',
				'border-transparent bg-transparent hover:bg-gray-2': color === 'transparent',
				'flex items-center gap-2': icon
			})}
			{...props}
		>
			<span>{children}</span>

			{icon && <Icon icon={icon} />}
		</button>
	)
}
