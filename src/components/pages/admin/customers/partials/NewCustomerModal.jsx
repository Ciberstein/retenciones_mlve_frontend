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
import { customersThunk } from '../../../../../store/slices/customers.slice';

export const NewCustomerModal = ({ open, setOpen }) => {

  const { register, handleSubmit, reset, formState: { errors }} = useForm();
  const dispatch = useDispatch()

  const submit = async (data) => {
    dispatch(setLoad(false))
    const url = '/customers'
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
        dispatch(customersThunk())
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
    <Modal open={open} setOpen={setOpen} title="Nuevo cliente">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
        <Input
          id="cust_id"
          name="cust_id"
          label="Cust ID"
          register={{
            function: register,
            errors: {
              function: errors,
              rules: {
                required: 'Cust ID is required',
              },
            },
          }}
        />
        <Input
          id="rif"
          name="rif"
          label="RIF"
          register={{
            function: register,
            errors: {
              function: errors,
              rules: {
                required: 'RIF is required',
              },
            },
          }}
        />
        <Input
          id="name"
          name="name"
          label="Nombre o razón social"
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
          id="nickname"
          name="nickname"
          label="Apodo"
          register={{
            function: register,
            errors: {
              function: errors,
              rules: {
                required: 'Nickname is required',
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
        <hr />
        <Button type="submit" size="lg">
          Crear
        </Button>
      </form>
    </Modal>
  )
}
