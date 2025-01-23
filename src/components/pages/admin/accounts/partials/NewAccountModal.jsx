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
import { usersThunk } from '../../../../../store/slices/users.slice';

export const NewAccountModal = ({ open, setOpen }) => {

  const { register, handleSubmit, reset, formState: { errors }} = useForm();
  const dispatch = useDispatch()

  const submit = async (data) => {
    dispatch(setLoad(false))
    const url = '/users'
    const formData = data;

    formData.role_id = Number(data.role_id)

    await axios_instance.post(url, formData)
      .then((res) => {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          toast: true,
          title: res.data.detail,
          showConfirmButton: false,
          timer: 3000
        });
        dispatch(usersThunk())
        setOpen(false)
        reset()
      })
      .catch((err) => {
        console.error(err)
        Swal.fire({
          position: "bottom-end",
          icon: "error",
          toast: true,
          title: err.response.data.detail,
          showConfirmButton: false,
          timer: 3000
        });
      })
      .finally(() => dispatch(setLoad(true)))

  }

  const role = [
    {
      value: 1,
      label: "Administrador"
    },
    {
      value: 2,
      label: "Agente"
    },
  ]

  return (
    <Modal open={open} setOpen={setOpen} title="Nuevo usuario">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
        <Input
          id="username"
          name="username"
          label="Nombre de usuario"
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
        <Select
          id="role_id"
          name="role_id"
          label="Rol"
          options={role}
          register={{
            function: register,
            errors: {
              function: errors,
              rules: {
                required: 'Role is required',
              },
            },
          }}
        />
        <hr />
        <Button type="submit" size="lg">
          Crear
        </Button>
      </form>
    </Modal>
  )
}
