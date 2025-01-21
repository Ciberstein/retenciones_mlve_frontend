import React from 'react'
import { AccountsTable } from './partials/AccountsTable'
import { AccountsManage } from './partials/AccountsManage'

export const AccountsPage = () => {

  return (
    <div className="flex flex-col gap-4">
      <AccountsManage />
      <AccountsTable />
    </div>
  )
}