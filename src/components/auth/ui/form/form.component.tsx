'use client'

import clsx from 'clsx'
import { FC, FormEvent, useState } from 'react'

import { IFormProps } from '@/components/auth'
import { Button, Input } from '@/components/ui'

import { TypesWithClassName } from '@/types'

export const Form: FC<TypesWithClassName<IFormProps>> = ({ buttonColor, buttonSize, className }) => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: ''
	})

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		const { name, value } = e.target as HTMLInputElement

		setValues({ ...values, [name]: value })

		// maybe I will use react-hook-form for this form
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {}

	const handleUserFormType = () => {
		console.log('change form type')

		// here I will change the form type from login to register and vice versa by using dispatch from redux-toolkit in the near future
	}

	console.log(values)

	return (
		<form className={clsx('flex flex-col gap-y-5', className)} onSubmit={handleSubmit}>
			<Input label='Name' name='name' value={values.name} onChange={handleChange} error='' required type='text' />
			<Input label='Email' name='email' value={values.email} onChange={handleChange} error='' required />
			<Input label='Password' name='password' value={values.password} onChange={handleChange} error='' required />

			<p className='group flex items-center text-sm text-secondary'>
				Already have an account? &nbsp;
				<Button
					className='w-fit -translate-x-3 px-3 py-0.5 group-hover:translate-x-0'
					size='sm'
					color='transparent'
					type='button'
					onClick={handleUserFormType}
				>
					Login now
				</Button>
			</p>

			<Button className='mt-2' color={buttonColor} size={buttonSize} type='submit'>
				Register
			</Button>
		</form>
	)
}
