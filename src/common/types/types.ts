import { LatLngExpression } from 'leaflet'

export type RecordType = {
	key: string
	place_1: string
	place_2: string
	place_3: string
	route: string
}

export type DomainRouteType = {
	startingPoint: RouteType
	intermediatePoint: RouteType
	endPoint: RouteType
}

type RouteType = {
	lat: number
	lng: number
}

export type DomainResponseType = {
	code: string
	routes: RouteResponseType[]
}

export type RouteResponseType = {
	geometry: {
		coordinates: LatLngExpression[]
	}
}
