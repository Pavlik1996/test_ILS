import {
	AnyAction,
	ThunkAction,
	ThunkDispatch,
	combineReducers,
	configureStore
} from '@reduxjs/toolkit'
import { routeSlice } from '../features/routeSlice/routeSlice'

const rootReducer = combineReducers({
	route: routeSlice
})

export const store = configureStore({
	reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppRootStateType,
	unknown,
	AnyAction
>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store
