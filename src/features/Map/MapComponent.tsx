import { LatLngExpression, Icon } from 'leaflet'
import { MapContainer, Polyline, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { selectCurrentRoutes, selectRoutes, selectShowMarker } from '../routeSlice/routeSelector'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import mapIconGreen from '../../common/images/free-icon-placeholder-6964820.png'
import mapIconRed from '../../common/images/map-icon-red.png'

export const MapComponent = () => {
	const zoom: number = 13
	const centerRoute: LatLngExpression = [59.84660399, 30.29496392]
	const [points, setPoints] = useState<LatLngExpression[]>([])

	const routes = useSelector(selectRoutes)
	const currentRoutes = useSelector(selectCurrentRoutes)
	const showMarker = useSelector(selectShowMarker)

	const dischargingIconGreen = new Icon({
		iconUrl: mapIconGreen,
		iconSize: [43, 43]
	})

	const dischargingIconRed = new Icon({
		iconUrl: mapIconRed,
		iconSize: [46, 46]
	})

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
			<Polyline color={'green'} positions={points}></Polyline>
			{showMarker && (
				<>
					<Marker
						position={currentRoutes.startingPoint}
						title={'Загрузка'}
						icon={dischargingIconRed}
					/>
					<Marker
						position={currentRoutes.intermediatePoint}
						title={'Разгрузка 1'}
						icon={dischargingIconGreen}
					/>
					<Marker
						position={currentRoutes.endPoint}
						title={'Разгрузка 2'}
						icon={dischargingIconGreen}
					/>
				</>
			)}
		</MapContainer>
	)
}
