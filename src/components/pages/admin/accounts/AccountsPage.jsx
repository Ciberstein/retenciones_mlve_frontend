import React, { useEffect } from 'react'
import { AccountsTable } from './partials/AccountsTable'
import { AccountsManage } from './partials/AccountsManage'
import { useDispatch, useSelector } from 'react-redux'
import { accountThunk } from '../../../../store/slices/account.slice'

export const AccountsPage = () => {

  const dispatch = useDispatch();

  const refresh = useSelector((state) => state.refresh)
  const account = useSelector((state) => state.account)

  useEffect(() => {
    dispatch(accountThunk())
  }, [refresh])

  return (
    <div className="flex flex-col gap-4">
      <AccountsManage />
      <AccountsTable data={account} />
    </div>
  )
}