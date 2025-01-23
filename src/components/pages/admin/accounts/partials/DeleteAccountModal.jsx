import React, { useState } from 'react'
import Modal from '../../../../elements/Modal'
import { Input } from '../../../../elements/user/Input'
import { useForm } from 'react-hook-form';
import { Button } from '../../../../elements/user/Button';
import { Select } from '../../../../elements/user/Select';
import axios_instance from '../../../../../utils/apiConfig';
import { useDispatch } from 'react-redux';
import { setLoad } from '../../../../../store/slices/loader.slice';
import Swal from 'sweetalert2';
import { accountThunk } from '../../../../../store/slices/account.slice';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const DeleteAccountModal = ({ open, setOpen, selected, setSelected }) => {

  const { handleSubmit } = useForm();
  const dispatch = useDispatch()

  const submit = async () => {
   dispatch(accountThunk())
   setSelected(false)
   setOpen(false)
  }

  return (
    <Modal open={open} setOpen={setOpen} header={false}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 font-medium text-center bg-gradient-to-b from-brand-orange-400 via-brand-orange-300 to-transparent p-4 rounded-lg">
          <ExclamationTriangleIcon className="h-20" />
          <span className="text-xl">
            ¿Está seguro que desea desactivar el usuario?
          </span>
        </div>
        <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button 
            size="lg"
            type="submit"
          >
            Confirmar  
          </Button>
          <Button
            size="lg"
            type="button"
            hierarchy="quiet"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
        </form>
      </div>
    </Modal>
  )
}
