import { AppRootStateType } from '../../app/store'

export const selectRoutes = (state: AppRootStateType) => state.route.routes
