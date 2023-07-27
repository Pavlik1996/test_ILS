import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { tableApi } from '../Table/table.api'
import { LatLngExpression } from 'leaflet'
import { DomainRouteType } from '../../common/types/types'

const initialState = {
	currentCoordinates: {} as DomainRouteType,
	routes: [] as LatLngExpression[]
}

const slice = createSlice({
	name: 'map',
	initialState,
	reducers: {
		setCurrentCoordinates: (state, action: PayloadAction<{ routes: DomainRouteType }>) => {
			state.currentCoordinates = action.payload.routes
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchRoutes.fulfilled, (state, action) => {
			state.routes = action.payload.routes
		})
	}
})

const fetchRoutes = createAsyncThunk<{ routes: LatLngExpression[] }, DomainRouteType>(
	'map/fetchRoutes',
	async arg => {
		const res = await tableApi.getRoute(arg)
		const routes = res.data.routes[0].geometry.coordinates
		return { routes }
	}
)

export const routeSlice = slice.reducer
export const routeActions = slice.actions
export const routeThunks = { fetchRoutes }
