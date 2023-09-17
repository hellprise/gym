import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type AddBtnType = 'favorites' | 'training' | 'cart'

export interface IAddButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	iconClasses?: string
	hint: string
	btnType?: AddBtnType
}
