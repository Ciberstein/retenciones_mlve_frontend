import React, { useState } from 'react'
import { Security } from './partials/Security'
import Card from '../../../elements/Card'
import { LockClosedIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import MenuItem from './partials/MenuItem'
import { Outlet, useLocation } from 'react-router-dom'

const ProfilePage = () => {

  const account = useSelector(state => state.account)
  const location = useLocation().pathname;  
  
  if(location !== "/profile") return (<div className="sm:max-w-3xl sm:mx-auto"><Outlet /></div>)

  return (
    <div className="flex flex-col gap-6 sm:max-w-3xl sm:mx-auto">
      <Card className="flex gap-6">
        <UserCircleIcon className="!size-12 sm:!size-24" />
        <div className="flex flex-col justify-center">
          <span className="font-semibold sm:text-xl">{account.name}</span>
          <span className="font-normal sm:text-base">{account.email}</span>
        </div>
      </Card>
      <Card className="flex flex-col !px-0">
        <MenuItem
          icon={<UserIcon className="size-6" />}
          url="/profile/account"
          title="Datos de tu cuenta"
          desc="Gestión"
        />
        <MenuItem
          icon={<LockClosedIcon className="size-6" />}
          url="/profile/security"
          title="Seguridad"
          desc="Gestión"
        />
      </Card>
    </div>
  )
}

ProfilePage.Security = Security;

export { ProfilePage }

