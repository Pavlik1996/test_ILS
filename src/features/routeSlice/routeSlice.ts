import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetRouteType, tableApi } from '../Table/table.api'
import { LatLngExpression } from 'leaflet'

const initialState: LatLngExpression[] = []

const slice = createSlice({
	name: 'map',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchRoutes.fulfilled, (_, action) => {
			return action.payload
		})
	}
})

const fetchRoutes = createAsyncThunk<LatLngExpression[], GetRouteType>(
	'map/fetchRoutes',
	async (arg) => {
		const res = await tableApi.getRoute(arg)
		return res.data.routes[0].geometry.coordinates
	}
)

export const routeSlice = slice.reducer
export const mapThunks = { fetchRoutes }
