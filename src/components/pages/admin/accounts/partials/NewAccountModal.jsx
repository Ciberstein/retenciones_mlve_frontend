import React, { useState } from 'react'
import Modal from '../../../../elements/Modal'
import { Input } from '../../../../elements/user/Input'
import { useForm } from 'react-hook-form';
import { Button } from '../../../../elements/user/Button';
import { Select } from '../../../../elements/user/Select';

export const NewAccountModal = ({ open, setOpen }) => {

  const { register, handleSubmit, formState: { errors }} = useForm();

  const submit = async (data) => {
  
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
          id="role"
          name="role"
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
        <Button type="submit">
          Crear
        </Button>
      </form>
    </Modal>
  )
}
