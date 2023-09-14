'use client'

import clsx from 'clsx'
import { FC, FormEvent, useState } from 'react'

import { IFormProps } from '@/components/auth'
import { Button, Input } from '@/components/ui'

import { toggleModalType } from '@/services'

import { useAppDispatch, useTypedSelector } from '@/hooks'

import { TypesWithClassName } from '@/types'

import { FORM_TYPES } from '@/utils'

export const Form: FC<TypesWithClassName<IFormProps>> = ({ buttonColor, buttonSize, className }) => {
	const { formType } = useTypedSelector(({ user }) => user)

	const isFormTypeRegister = formType === FORM_TYPES.REGISTER

	const defaultValues = isFormTypeRegister ? { name: '', email: '', password: '' } : { email: '', password: '' }

	const [values, setValues] = useState(defaultValues)

	const dispatch = useAppDispatch()

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		const { name, value } = e.target as HTMLInputElement

		setValues({ ...values, [name]: value })

		// maybe I will use react-hook-form for this form
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {}

	const handleUserFormType = () => {
		dispatch(toggleModalType(formType === FORM_TYPES.REGISTER ? FORM_TYPES.LOGIN : FORM_TYPES.REGISTER))
	}

	const formObject = {
		heading: isFormTypeRegister ? 'Registration' : 'Sign In',
		changeFormTypeText: isFormTypeRegister ? 'Already have an account?' : "Don't have an account?",
		changeFormTypeBtn: isFormTypeRegister ? 'Login Now' : 'Register',
		btnText: isFormTypeRegister ? 'Register' : 'Login'
	}

	console.log(values)

	return (
		<>
			<h1 className='mb-10 text-center text-xl font-semibold text-secondary'>{formObject.heading}</h1>

			<form className={clsx('flex flex-col gap-y-5', className)} onSubmit={handleSubmit}>
				{isFormTypeRegister && (
					<Input label='Name' name='name' value={values.name} onChange={handleChange} error='' required type='text' />
				)}
				<Input label='Email' name='email' value={values.email} onChange={handleChange} error='' required type='email' />
				<Input
					label='Password'
					name='password'
					value={values.password}
					onChange={handleChange}
					error=''
					required
					type={'password'}
				/>

				<p className='group flex items-center text-sm text-secondary'>
					{formObject.changeFormTypeText} &nbsp;
					<Button
						className='w-fit -translate-x-3 px-3 py-0.5 group-hover:translate-x-0'
						size='sm'
						color='transparent'
						type='button'
						onClick={handleUserFormType}
					>
						{formObject.changeFormTypeBtn}
					</Button>
				</p>

				<Button className='mt-2' color={buttonColor} size={buttonSize} type='submit'>
					{formObject.btnText}
				</Button>
			</form>
		</>
	)
}
