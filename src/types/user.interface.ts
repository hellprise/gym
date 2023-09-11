export type FormType = 'login' | 'register'

// interface IProductWithQuantity extends IProduct {
// 	quantity: number
// }

// export interface IProductInFavorites extends IProduct {
// 	existsInFavorites: boolean
// }

export interface UserState {
	currentUser: null | UserFullestObject
	// cart: IProductWithQuantity[]
	// favorites: IProductInFavorites[]
	cart: any[]
	wishList: any[]
	isLoading: boolean
	formType: FormType
	openSidebar: boolean
}

export interface UserObject {
	email: string
	password: string
	name: string
	avatar: string
}

export interface UserFullestObject extends UserObject {
	id: number
	role: string
}
