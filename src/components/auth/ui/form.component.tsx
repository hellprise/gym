'use client'

import clsx from 'clsx'
import { FC, FormEvent, useState } from 'react'

import { Button, IFormProps, Input } from '@/components'

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
		// here I will change the form type from login to register and vice versa by using dispatch from redux-toolkit in the near future
	}

	console.log(values)

	return (
		<form className={clsx('flex flex-col gap-y-5', className)} onSubmit={handleSubmit}>
			<Input label='Name' name='name' value={values.name} onChange={handleChange} error='' required />
			<Input label='Email' name='email' value={values.email} onChange={handleChange} error='' required />
			<Input label='Password' name='password' value={values.password} onChange={handleChange} error='' required />

			<Button className='w-fit px-3 py-0.5' size='sm' color='transparent' type='button' onClick={handleUserFormType}>
				Already have an account? Login now
			</Button>

			<Button className='mt-2' color={buttonColor} size={buttonSize} type='submit'>
				Register
			</Button>
		</form>
	)
}
