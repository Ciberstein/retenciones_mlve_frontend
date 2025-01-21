import React, { useState } from 'react'
import Card from '../../../../elements/Card'
import { Input } from '../../../../elements/user/Input'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { Button } from '../../../../elements/user/Button'
import { useForm } from 'react-hook-form'
import { PreAuthLayout } from '../../../../layouts/PreAuthLayout'

export const RecoveryPasswordForm = ({ username, token }) => {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const { register, handleSubmit, formState: { errors }} = useForm();

  const submit = async (data) => {
    console.log(data)
  }

  return (
    <PreAuthLayout className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-3 font-medium text-center">
        <h1 className="text-2xl md:text-4xl">
          Recuperar contraseña
        </h1>
        <div className="text-center flex flex-col items-center">
          <span>A continuación,</span>
          <span>ingresa tu nueva contraseña</span>
        </div>
      </div>
      <Card className="w-full sm:max-w-96">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(submit)}>
          <Input 
            id="password"
            name="password"
            type={show1 ? 'text' : 'password'}
            label="Nueva contraseña"
            element={
              <button 
                onClick={() => setShow1(!show1)} 
                className="size-6 text-gray-400"
                type="button"
              >
                {show1 ? <EyeSlashIcon /> : <EyeIcon />}
              </button>
            }
            register={{
              function: register,
              errors: {
                function: errors,
                rules: {
                  required: 'Password is required',
                },
              },
            }}
          />
          <Input 
            id="password_2"
            name="password_2"
            type={show2 ? 'text' : 'password'}
            label="Repetir contraseña"
            element={
              <button 
                onClick={() => setShow2(!show2)} 
                className="size-6 text-gray-400"
                type="button"
              >
                {show2 ? <EyeSlashIcon /> : <EyeIcon />}
              </button>
            }
            register={{
              function: register,
              errors: {
                function: errors,
                rules: {
                  required: 'Repeat password',
                },
              },
            }}
          />
          <Button type="submit">
            Actualizar
          </Button>
          <hr />
          <Link to="/login" className="hover:underline text-meli-blue-primary-500 text-s text-center">
            Vover al inicio
          </Link>
        </form>
      </Card>
    </PreAuthLayout>
  )
}
