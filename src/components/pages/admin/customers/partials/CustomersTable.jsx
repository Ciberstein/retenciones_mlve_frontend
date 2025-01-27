import React from 'react'
import { Table } from '../../../../elements/user/Table'

export const CustomersTable = ({ title = "Mantenimiento de Clientes", data, selected, setSelected }) => {

  const header = [
		{
			field: 'rif',
			name: 'RIF',
		},
		{
			field: 'cust_id',
			name: 'Cust ID',
		},
    {
			field: 'nickname',
			name: 'Apodo',
		},
    {
			field: 'name',
			name: 'Razón social',
		},
    {
			field: 'email',
			name: 'E-mail',
		},
	]

  return (
		<Table
			header={header} 
			items={data.data}
			title={title}
      selectRow={{
        active: true,
        selected,
        setSelected
      }}
		/>
  )
}
