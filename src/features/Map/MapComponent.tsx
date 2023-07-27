import { LatLngExpression } from 'leaflet'
import { MapContainer, Polyline, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { selectCurrentRoutes, selectRoutes, selectShowMarker } from '../routeSlice/routeSelector'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const MapComponent = () => {
	const zoom: number = 13
	const centerRoute: LatLngExpression = [59.84660399, 30.29496392]
	const [points, setPoints] = useState<LatLngExpression[]>([])

	const routes = useSelector(selectRoutes)
	const currentRoutes = useSelector(selectCurrentRoutes)
	const showMarker = useSelector(selectShowMarker)

	useEffect(() => {
		if (routes) {
			// @ts-ignore
			setPoints(routes.map(el => [el[1], el[0]]))
		}
	}, [routes, centerRoute])

	return (
		<MapContainer center={centerRoute} zoom={zoom} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Polyline color={'red'} positions={points}></Polyline>
			{showMarker && (
				<>
					<Marker position={currentRoutes.startingPoint} />
					<Marker position={currentRoutes.intermediatePoint} />
					<Marker position={currentRoutes.endPoint} />
				</>
			)}
		</MapContainer>
	)
}
