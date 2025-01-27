import React, { useEffect, useState } from 'react'
import { CustomersTable } from './partials/CustomersTable'
import { useDispatch, useSelector } from 'react-redux';
import { CustomersManage } from './partials/CustomersManage';
import { customersThunk } from '../../../../store/slices/customers.slice';

export const CustomersPage = () => {

  const dispatch = useDispatch();
  const [selectedTr, setSelectedTr] = useState(null); 
  const refresh = useSelector((state) => state.refresh)
  const customers = useSelector((state) => state.customers)

  useEffect(() => {
    dispatch(customersThunk())
  }, [refresh])

  return (
    <div className="flex flex-col gap-4">
      <CustomersManage selected={selectedTr} setSelected={setSelectedTr} />
      <CustomersTable data={customers} selected={selectedTr} setSelected={setSelectedTr} />
    </div>
  )
}
