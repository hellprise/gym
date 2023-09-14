import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { FormType, UserState } from '@/types'

import { FORM_TYPES } from '@/utils'

const initialState: UserState = {
	currentUser: null,
	cart: [],
	wishList: [],
	isLoading: false,
	formType: FORM_TYPES.REGISTER,
	openSidebar: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// addToCart: (state, { payload }) => {
		// 	let newCart = [...state.cart]

		// 	const item = state.cart.find(({ id }) => id === payload.id)

		// 	if (item) {
		// 		newCart = newCart.map(item => {
		// 			return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 } : item
		// 		})
		// 	} else newCart.push({ ...payload, quantity: 1 })

		// 	state.cart = newCart
		// },

		// removeItemFromCart: (state, { payload }) => {
		// 	let newCart = [...state.cart]

		// 	newCart = newCart.filter(({ id }) => id !== payload)

		// 	state.cart = newCart
		// },

		// addToFavorites: (state, { payload }) => {
		// 	let favoritesState = [...state.favorites]

		// 	const item = state.favorites.find(({ id }) => id === payload.id)

		// 	if (item) {
		// 		favoritesState = favoritesState.map(item => {
		// 			return item.id === payload.id
		// 				? {
		// 						...item,
		// 						existsInFavorites: item.existsInFavorites === true
		// 				  }
		// 				: item
		// 		})
		// 	} else
		// 		favoritesState.push({
		// 			...payload,
		// 			existsInFavorites: true
		// 		})

		// 	state.favorites = favoritesState
		// },

		toggleSidebar: (state, { payload }) => {
			state.openSidebar = payload
		},

		toggleModalType: (state, action: PayloadAction<FormType>) => {
			state.formType = action.payload
		}
	}
	// extraReducers: builder => {
	// 	builder.addCase(createUser.pending, state => {
	// 		state.isLoading = true
	// 	})
	// 	builder.addCase(createUser.fulfilled, (state, { payload }) => {
	// 		state.currentUser = payload as any
	// 		state.isLoading = false
	// 	})
	// 	builder.addCase(createUser.rejected, (state, action) => {
	// 		state.isLoading = false
	// 		state.currentUser = null

	// 		console.error('create user error', action)
	// 	})
	// 	builder.addCase(login.pending, state => {
	// 		state.currentUser = null
	// 		state.isLoading = true
	// 	})
	// 	builder.addCase(login.fulfilled, (state, { payload }) => {
	// 		state.currentUser = payload
	// 		state.isLoading = false
	// 	})
	// 	builder.addCase(login.rejected, (state, action) => {
	// 		state.isLoading = false
	// 		state.currentUser = null

	// 		console.error('login error', action)
	// 	})
	// 	builder.addCase(updateUser.pending, state => {
	// 		state.isLoading = true
	// 	})
	// 	builder.addCase(updateUser.fulfilled, (state, { payload }) => {
	// 		state.currentUser = payload as any
	// 		state.isLoading = false
	// 	})
	// 	builder.addCase(updateUser.rejected, (state, action) => {
	// 		state.isLoading = false
	// 		state.currentUser = null

	// 		console.error('update user error', action)
	// 	})
	// }
})

export const { toggleSidebar, toggleModalType } = userSlice.actions

export default userSlice.reducer
