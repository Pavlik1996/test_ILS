import { AppRootStateType } from '../../app/store'

export const selectRoutes = (state: AppRootStateType) => state.route.routes
export const selectCurrentRoutes = (state: AppRootStateType) => state.route.currentCoordinates
export const selectShowMarker = (state: AppRootStateType) => state.route.showMarker
