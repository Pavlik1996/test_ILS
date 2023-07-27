import { Table } from 'antd'
import s from './TableRoute.module.scss'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'

import { routeActions, routeThunks } from '../routeSlice/routeSlice.ts'
import { DomainRouteType, RecordType } from '../../common/types/types.ts'

export const TableRout = () => {
	const dispatch = useAppDispatch()

	const dataSource = [
		{
			key: '1',
			route: 'Маршрут№1',
			place_1: '59.84660399 30.29496392',
			place_2: '59.82934196 30.42423701',
			place_3: '59.83567701 30.38064206'
		},
		{
			key: '2',
			route: 'Маршрут№2',
			place_1: '59.82934196 30.42423701',
			place_2: '59.82761295 30.41705607',
			place_3: '59.84660399 30.29496392'
		},
		{
			key: '3',
			route: 'Маршрут№3',
			place_1: '59.83567701 30.38064206',
			place_2: '59.84660399 30.29496392',
			place_3: '59.82761295 30.41705607'
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

	const onClickHandler = (record: RecordType) => {
		const [latStartingPoint, lngStartingPoint] = record.place_1.split(' ').map(parseFloat)
		const [latIntermediatePoint, lngIntermediatePoint] = record.place_2.split(' ').map(parseFloat)
		const [latEndPoint, lngEndPoint] = record.place_3.split(' ').map(parseFloat)

		const data: DomainRouteType = {
			startingPoint: {
				lat: latStartingPoint,
				lng: lngStartingPoint
			},
			intermediatePoint: {
				lat: latIntermediatePoint,
				lng: lngIntermediatePoint
			},
			endPoint: {
				lat: latEndPoint,
				lng: lngEndPoint
			}
		}
		dispatch(routeThunks.fetchRoutes(data))
		dispatch(routeActions.setCurrentCoordinates({ routes: data }))
	}

	return (
		<Table
			onRow={record => {
				return {
					onClick: e => onClickHandler(record)
				}
			}}
			columns={columns}
			dataSource={dataSource}
			className={s.wrapper}
			pagination={false}
		/>
	)
}
