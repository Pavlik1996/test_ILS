import axios from 'axios'
import { DomainRouteType } from '../../common/types/types'
import { DomainResponseType } from '../../common/types/types'

const instance = axios.create({
	baseURL: 'http://router.project-osrm.org/route/v1/driving/'
})

export const tableApi = {
	getRoute(data: DomainRouteType) {
		console.log(data)
		return instance.get<DomainResponseType>(
			`${data.startingPoint.lng},${data.startingPoint.lat};${data.intermediatePoint.lng},${data.intermediatePoint.lat};${data.endPoint.lng},${data.endPoint.lat}?steps=true&geometries=geojson&overview=full`
		)
	}
}
