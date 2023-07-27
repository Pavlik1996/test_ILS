import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { tableApi } from '../Table/table.api'
import { LatLngExpression } from 'leaflet'
import { DomainRouteType } from '../../common/types/types'

const initialState = {
	currentCoordinates: {} as DomainRouteType,
	routes: [] as LatLngExpression[],
	showMarker: false as boolean
}

const slice = createSlice({
	name: 'route',
	initialState,
	reducers: {
		setCurrentCoordinates: (state, action: PayloadAction<{ routes: DomainRouteType }>) => {
			state.currentCoordinates = action.payload.routes
		},
		toggleShowMarker: (state, action: PayloadAction<{ showMarker: boolean }>) => {
			state.showMarker = action.payload.showMarker
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchRoutes.fulfilled, (state, action) => {
			state.routes = action.payload.routes
		})
	}
})

const fetchRoutes = createAsyncThunk<{ routes: LatLngExpression[] }, DomainRouteType>(
	'route/fetchRoutes',
	async (arg, { dispatch }) => {
		const res = await tableApi.getRoute(arg)
		const routes = res.data.routes[0].geometry.coordinates
		dispatch(routeActions.toggleShowMarker({ showMarker: true }))
		return { routes }
	}
)

export const routeSlice = slice.reducer
export const routeActions = slice.actions
export const routeThunks = { fetchRoutes }
