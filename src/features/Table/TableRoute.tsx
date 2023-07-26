import { Table } from 'antd'
import s from './TableRoute.module.scss'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { GetRouteType } from './table.api'
import { mapThunks } from '../routeSlice/routeSlice.ts'

type RecordType = {
	key: string
	place_1: number[]
	place_2: number[]
	place_3: number[]
	route: string
}

export const TableRout = () => {

	const dispatch = useAppDispatch()

	const dataSource: RecordType[] = [
		{
			key: '1',
			route: 'Маршрут#1',
			place_1: [59.84660399, 30.29496392],
			place_2: [59.82934196, 30.42423701],
			place_3: [59.83567701, 30.38064206]
		},
		{
			key: '2',
			route: 'Маршрут#1',
			place_1: [59.82934196, 30.42423701],
			place_2: [59.82761295, 30.41705607],
			place_3: [59.84660399, 30.29496392]
		},
		{
			key: '3',
			route: 'Маршрут#1',
			place_1: [59.83567701, 30.38064206],
			place_2: [59.84660399, 30.29496392],
			place_3: [59.82761295, 30.41705607]
		}
	]

	const columns = [
		{
			title: 'Маршрут',
			dataIndex: 'route',
			key: 'route'
		},
		{
			title: 'Точка 1',
			dataIndex: 'place_1',
			key: 'place_1'
		},
		{
			title: 'Точка 2',
			dataIndex: 'place_2',
			key: 'place_2'
		},
		{
			title: 'Точка 3',
			dataIndex: 'place_3',
			key: 'place_3'
		}
	]

	const onClickHander = (record: RecordType) => {
		const data: GetRouteType = {
			startingPoint: {
				lat: record.place_1[0],
				lng: record.place_1[1]
			},
			intermediatePoint: {
				lat: record.place_2[0],
				lng: record.place_2[1]
			},
			endPoint: {
				lat: record.place_3[0],
				lng: record.place_3[1]
			}
		}
		dispatch(mapThunks.fetchRoutes(data))
	}


	return (
		<Table
			onRow={record => {
				return {
					onClick: e => onClickHander(record)
				}
			}}
			columns={columns}
			dataSource={dataSource}
			className={s.wrapper}
			pagination={false}
		/>
	)
}
