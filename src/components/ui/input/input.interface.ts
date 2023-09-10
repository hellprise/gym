import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label: string
	error?: string
}
