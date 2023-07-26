import { LatLngExpression } from 'leaflet'
import { MapContainer, Polyline, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { mapThunks } from '../routeSlice/routeSlice'
import { selectRoutes } from '../routeSlice/routeSelector'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GetRouteType } from '../Table/table.api.ts'

export const MapComponent = () => {
	const zoom: number = 13
	const centerRoute: LatLngExpression = [59.84660399, 30.29496392]
	const [points, setPoints] = useState<LatLngExpression[]>([])


	const routes = useSelector(selectRoutes)

	const dispatch = useAppDispatch()

	const arg: GetRouteType = {
		startingPoint: { lat: 59.83567701, lng: 30.38064206 },
		intermediatePoint: { lat: 59.84660399, lng: 30.29496392 },
		endPoint: { lat: 59.82761295, lng: 30.41705607 }
	}

	useEffect(() => {
		dispatch(mapThunks.fetchRoutes(arg))
	}, [])

	useEffect(() => {
		if (routes) {
			// @ts-ignore
			setPoints(routes.map(el => [el[1], el[0]]))
		}
	}, [routes])

	const polyline_1: LatLngExpression[] = [
		[59.84660399, 30.29496392],
		[59.82934196, 30.42423701],
		[59.83567701, 30.38064206]
	]
	const polyline_2: LatLngExpression[] = [
		[59.82934196, 30.42423701],
		[59.82761295, 30.41705607],
		[59.84660399, 30.29496392]
	]
	const polyline_3: LatLngExpression[] = [
		[59.83567701, 30.38064206],
		[59.84660399, 30.29496392],
		[59.82761295, 30.41705607]
	]


	return (
		<MapContainer center={centerRoute} zoom={zoom} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Polyline color={'red'} positions={points}></Polyline>
			<Marker position={polyline_3[0]} />
			<Marker position={polyline_3[1]} />
			<Marker position={polyline_3[2]} />
		</MapContainer>
	)
}
