import { LatLngExpression } from 'leaflet'
import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://router.project-osrm.org/route/v1/driving/'
})

export const tableApi = {
	getRoute(data: GetRouteType) {
		console.log(data)
		return instance.get<ResponseType>(
			`${data.startingPoint.lng},${data.startingPoint.lat};${data.intermediatePoint.lng},${data.intermediatePoint.lat};${data.endPoint.lng},${data.endPoint.lat}?steps=true&geometries=geojson&overview=full`
		)
	}
}

export type GetRouteType = {
	startingPoint: RouteType
	intermediatePoint: RouteType
	endPoint: RouteType
}

type RouteType = {
	lat: number
	lng: number
}

type ResponseType = {
	code: string
	routes: RouteResponseType[]
}

export type RouteResponseType = {
	geometry: {
		coordinates: LatLngExpression[]
	}
}
