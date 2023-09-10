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
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {}

	return (
		<form className={clsx('flex flex-col gap-y-5', className)} onSubmit={handleSubmit}>
			<Input label='Name' name='name' value={values.name} onChange={handleChange} error='' />
			<Input label='Email' name='email' value={values.email} onChange={handleChange} error='' />
			<Input label='Password' name='password' value={values.password} onChange={handleChange} error='' />

			<Button className='mt-2' color={buttonColor} size={buttonSize}>
				Register
			</Button>
		</form>
	)
}
