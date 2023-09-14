import { FormType } from '../types/user.interface'

export const ROUTES = {
	HOME: '/',
	AUTH: 'auth',
	EXERCISES: 'exercises',
	GYMS: 'gyms',
	PROGRAMS: 'programs'
}

export const FORM_TYPES: {
	// [FORM_TYPE: string]: FormType
	REGISTER: FormType
	LOGIN: FormType
} = {
	REGISTER: 'register',
	LOGIN: 'login'
}
