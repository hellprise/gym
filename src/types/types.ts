import { ReactNode } from 'react'

export type TypesWithClassName<P = unknown> = P & {
	className?: string | undefined
}

export type TypesWithClassesAndChildren<P = unknown> = TypesWithClassName<P> & {
	children?: ReactNode
}
