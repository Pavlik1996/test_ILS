import { Table } from 'antd'
import s from './TableRoute.module.scss'
import { useEffect } from 'react'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { GetRouteType, tableApi } from './table.api'

export const TableRout = () => {
	const dataSource = [
		{
			key: '1',
			name: 'Mike',
			age: 32,
			address: '10 Downing Street'
		},
		{
			key: '2',
			name: 'John',
			age: 42,
			address: '10 Downing Street'
		}
	]

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age'
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address'
		}
	]

	return (
		<Table
			onRow={record => {
				return {
					onClick: e => {
						console.log(record)
					}
				}
			}}
			columns={columns}
			dataSource={dataSource}
			className={s.wrapper}
			pagination={false}
		/>
	)
}
