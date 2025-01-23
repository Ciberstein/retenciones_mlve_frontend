import React from 'react'
import { Table } from '../../../../elements/user/Table'

export const AccountsTable = ({ 
  title = "Mantenimiento de Usuarios",
  data,
  selected,
  setSelected 
}) => {

	const header = [
		{
			field: 'username',
			name: 'Nombre de usuario',
		},
		{
			field: 'name',
			name: 'Nombre',
		},
    {
			field: 'email',
			name: 'E-mail',
		},
	];

  return (
		<Table
			header={header}
			items={data?.data}
			title={title}
      selectRow={{
        active: true,
        selected,
        setSelected
      }}
		/>
  )
}
