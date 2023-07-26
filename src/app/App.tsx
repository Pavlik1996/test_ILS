import './App.css'
import { MapComponent } from '../features/Map/MapComponent'
import { TableRout } from '../features/Table/TableRoute'
import { Button } from 'antd'

function App() {
	return (
		<div className='container'>
			<TableRout />
			<MapComponent />
		</div>
	)
}

export default App
