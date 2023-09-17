// import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// import { UserFullestObject, UserObject } from '../../types/user.interface'

// const USERS = 'users'
// const AUTH = 'auth'

// export const createUser = createAsyncThunk<UserObject, UserObject>('users/createUser', async (data, thunkApi) => {
// 	try {
// 		const response = await axios.post<UserObject>(`${process.env.REACT_APP_API_URL}/${USERS}`, data)
// 		return response.data
// 	} catch (error) {
// 		console.error('create user action error', error)
// 		return thunkApi.rejectWithValue(error)
// 	}
// })

// export const login = createAsyncThunk('auth/login', async (data: Omit<UserObject, 'name' | 'avatar'>, thunkApi) => {
// 	try {
// 		const response = await axios.post<{
// 			access_token: string
// 			refresh_token: string
// 		}>(`${process.env.REACT_APP_API_URL}/${AUTH}/login`, data)

// 		const accessToken = response.data.access_token

// 		const login = await axios<UserFullestObject>(`${process.env.REACT_APP_API_URL}/${AUTH}/profile`, {
// 			headers: {
// 				Authorization: `Bearer ${accessToken}`
// 			}
// 		})

// 		return login.data
// 	} catch (error) {
// 		console.error('login action error', error)
// 		return thunkApi.rejectWithValue(error)
// 	}
// })

// export const updateUser = createAsyncThunk('users/updateUser', async (data: UserFullestObject, thunkApi) => {
// 	try {
// 		const response = await axios.put<UserObject>(`${process.env.REACT_APP_API_URL}/${USERS}/${data.id}`, data)
// 		return response.data
// 	} catch (error) {
// 		console.error('update user action error', error)
// 		return thunkApi.rejectWithValue(error)
// 	}
// })
