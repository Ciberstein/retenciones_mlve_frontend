import React, { useState } from 'react'
import { Button } from '../../../../elements/user/Button'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { NewAccountModal } from './NewAccountModal'

export const AccountsManage = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="flex gap-4 items-center">
      <Button className="flex items-center gap-2 !py-2 !px-3 !font-normal" onClick={() => setOpen(true)}>
        <NewAccountModal open={open} setOpen={setOpen} />
        <PlusCircleIcon className="size-5"/>
        Nuevo
      </Button>
    </div>
  )
}
