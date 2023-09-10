import clsx from 'clsx'
import { FC } from 'react'

import { IInputProps } from './input.interface'

export const Input: FC<IInputProps> = ({ className, label, error, ...props }) => {
	return (
		<section className='group relative z-0 w-full'>
			<input
				type='email'
				name='floating_email'
				id='floating_email'
				className={clsx(
					'peer relative block w-full appearance-none rounded-xl border-2 border-gray-3 bg-transparent px-5 py-2.5 text-sm font-medium text-secondary transition-all duration-200 hover:border-gray-1 focus:border-gray-1 focus:outline-none focus:ring-0',
					className,
					{
						'border-error': error
					}
				)}
				placeholder=''
				required
				{...props}
			/>

			<label
				htmlFor='floating_email'
				className={clsx(
					'absolute left-3 top-[14px] z-[1] origin-[0] -translate-y-6 scale-75 transform bg-white px-3 py-0.5 text-lg font-medium leading-none text-gray-1 duration-300 peer-focus:text-gray-3',
					{
						'text-error': error
					}
				)}
			>
				{label}
			</label>

			<div
				className={clsx('rounded-xl bg-error/5 transition-all duration-200', {
					'invisible -translate-y-10 opacity-0': !error,
					'visible mt-4 translate-y-0 px-4 py-3 opacity-100': error
				})}
			>
				<p className='text-center text-xs text-error'>{error}</p>
			</div>
		</section>
	)
}