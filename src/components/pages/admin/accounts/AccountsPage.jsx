import React, { useEffect, useState } from 'react'
import { AccountsTable } from './partials/AccountsTable'
import { AccountsManage } from './partials/AccountsManage'
import { useDispatch, useSelector } from 'react-redux'
import { usersThunk } from '../../../../store/slices/users.slice'

export const AccountsPage = () => {

  const dispatch = useDispatch();
  const [selectedTr, setSelectedTr] = useState(null); 
  const refresh = useSelector((state) => state.refresh)
  const users = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(usersThunk())
  }, [refresh])

  return (
    <div className="flex flex-col gap-4">
      <AccountsManage selected={selectedTr} setSelected={setSelectedTr} />
      <AccountsTable data={users} selected={selectedTr} setSelected={setSelectedTr}  />
    </div>
  )
}