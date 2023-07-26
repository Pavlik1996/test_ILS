import { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export const MapComponent = () => {
	const zoom: number = 13
	const centerRoute: LatLngExpression = [59.83567701, 30.38064206]

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
			<Polyline color={'red'} positions={polyline_2}></Polyline>
			<Marker position={polyline_2[0]}></Marker>
			<Marker position={polyline_2[1]}></Marker>
			<Marker position={polyline_2[2]}></Marker>
		</MapContainer>
	)
}
