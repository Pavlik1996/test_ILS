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


	useEffect(() => {
		if (routes) {
			// @ts-ignore
			setPoints(routes.map(el => [el[1], el[0]]))
		}
	}, [routes])




	return (
		<MapContainer center={centerRoute} zoom={zoom} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Polyline color={'red'} positions={points}></Polyline>
			{/*<Marker position={polyline_3[0]} />*/}

		</MapContainer>
	)
}
