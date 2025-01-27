import React, { useState } from 'react'
import { Button } from '../../../../elements/user/Button'
import { MinusCircleIcon, PencilIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { NewCustomerModal } from './NewCustomerModal'

export const CustomersManage = ({ selected, setSelected }) => {

  const [newModal, setNewModal] = useState(false)

  return (
    <div className="flex gap-4 items-center">
      <Button
        className="flex items-center gap-2 !font-normal" 
        onClick={() => setNewModal(true)}
      >
        <NewCustomerModal open={newModal} setOpen={setNewModal} />
        <PlusCircleIcon className="size-5"/>
        Nuevo
      </Button>
    </div>
  )
}
