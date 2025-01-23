import React, { useState } from 'react'
import { Button } from '../../../../elements/user/Button'
import { MinusCircleIcon, PencilIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { NewAccountModal } from './NewAccountModal'
import { EditAccountModal } from './EditAccountModal'
import { DeleteAccountModal } from './DeleteAccountModal'

export const AccountsManage = ({ selected, setSelected }) => {

  const [newModal, setNewModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  return (
    <div className="flex gap-4 items-center">
      <Button 
        className="flex items-center gap-2 !font-normal" 
        onClick={() => setNewModal(true)}
        size="md"
      >
        <NewAccountModal open={newModal} setOpen={setNewModal} />
        <PlusCircleIcon className="size-5"/>
        Nuevo
      </Button>
      { selected &&
        <Button 
          className="flex items-center gap-2 !font-normal" 
          onClick={() => setEditModal(true)}
          color="green"
          size="md"
          hierarchy="quiet"
        >
          <EditAccountModal open={editModal} setOpen={setEditModal} selected={selected} setSelected={setSelected} />
          <PencilIcon className="size-5"/>
          Editar
        </Button>
      }
      { selected &&
        <Button
          className="flex items-center gap-2 !font-normal"
          onClick={() => setDeleteModal(true)}
          color="red" 
          size="md"
          hierarchy="quiet"
        >
          <DeleteAccountModal open={deleteModal} setOpen={setDeleteModal} selected={selected} setSelected={setSelected} />
          <MinusCircleIcon className="size-5"/>
          Desactivar
        </Button>
      }
    </div>
  )
}
