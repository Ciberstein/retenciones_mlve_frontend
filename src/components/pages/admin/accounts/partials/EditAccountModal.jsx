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

export const EditAccountModal = ({ open, setOpen, selected, setSelected }) => {

  const { register, handleSubmit, formState: { errors }} = useForm();
  const dispatch = useDispatch()

  const submit = async (data) => {
   console.log(data)
  }

  return (
    <Modal open={open} setOpen={setOpen} title="Editar usuario">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
        <Input
          id="username"
          name="username"
          label="Nombre de usuario"
          defaultValue={selected.username}
          register={{
            function: register,
            errors: {
              function: errors,
              rules: {
                required: 'Username is required',
              },
            },
          }}
        />
        <Input
          id="name"
          name="name"
          label="Nombre"
          defaultValue={selected.name}
          register={{
            function: register,
            errors: {
              function: errors,
              rules: {
                required: 'Name is required',
              },
            },
          }}
        />
        <Input
          id="email"
          name="email"
          label="Correo"
          type="email"
          defaultValue={selected.email}
          register={{
            function: register,
            errors: {
              function: errors,
              rules: {
                required: 'Email is required',
              },
            },
          }}
        />
        <hr />
        <Button type="submit" size="lg">
          Actualizar
        </Button>
      </form>
    </Modal>
  )
}
