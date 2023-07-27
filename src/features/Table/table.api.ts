import axios from 'axios'
import { DomainRouteType } from '../../common/types/types'
import { DomainResponseType } from '../../common/types/types'

const instance = axios.create({
	baseURL: 'http://router.project-osrm.org/route/v1/driving/'
})

export const tableApi = {
	getRoute(data: DomainRouteType) {
		const startingPointLng = data.startingPoint.lng
		const startingPointLat = data.startingPoint.lat
		const intermediatePointLng = data.intermediatePoint.lng
		const intermediatePointLat = data.intermediatePoint.lat
		const endPointLng = data.endPoint.lng
		const endPointLat = data.endPoint.lat

		return instance.get<DomainResponseType>(
			`${startingPointLng},${startingPointLat};${intermediatePointLng},${intermediatePointLat};${endPointLng},${endPointLat}?steps=true&geometries=geojson&overview=full`
		)
	}
}
