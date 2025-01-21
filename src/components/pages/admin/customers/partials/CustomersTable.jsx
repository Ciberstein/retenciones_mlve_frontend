import React from 'react'
import { Table } from '../../../../elements/user/Table'

export const CustomersTable = ({ title = "Mantenimiento de Clientes" }) => {

  const header = [
		{
			field: 'id',
			name: 'ID',
		},
		{
			field: 'createdAt',
			name: 'Fecha',
			date: true
		},
	]

  return (
		<Table
			header={header} 
			items={[]}
			title={title}
		/>
  )
}
