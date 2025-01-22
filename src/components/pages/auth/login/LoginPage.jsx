import React, { useState } from 'react'
import { PreAuthLayout } from '../../../layouts/PreAuthLayout'
import Card from '../../../elements/Card'
import { Input } from '../../../elements/user/Input'
import { Button } from '../../../elements/user/Button'
import { Link, useNavigate } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import axios_instance from '../../../../utils/apiConfig'
import Swal from 'sweetalert2'
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux'
import { setLoad } from '../../../../store/slices/loader.slice'

export const LoginPage = () => {

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }} = useForm();

  const submit = async (data) => {
    dispatch(setLoad(true));
    const url = `/auth/login`;

    await axios_instance.post(url, data, {
      withCredentials: true
    })
      .then((res) => {
        const jwt_decoded = jwtDecode(res.data.access_token)
        axios_instance.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`
        sessionStorage.setItem("isLogged", true)
        sessionStorage.setItem("role", jwt_decoded.role_id)
        sessionStorage.setItem("user_id", jwt_decoded.user_id)
        if(jwt_decoded.role_id === 1)
          navigate("/admin")
        if(jwt_decoded.role_id === 2)
          navigate("/home")
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

  return (
    <PreAuthLayout className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-3 font-medium text-center">
        <h1 className="text-2xl md:text-4xl">
          ¡Bienvenido!
        </h1>
        <h3 className="text-xl md:text-2xl">
          Por favor ingresa tus datos para iniciar sesión
        </h3>
      </div>
      <div>
        <Card className="w-full sm:min-w-96">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit(submit)}>
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
              id="password"
              name="password"
              type={show ? 'text' : 'password'}
              label="Contraseña"
              element={
                <button 
                  onClick={() => setShow(!show)} 
                  className="size-6 text-gray-400"
                  type="button"
                >
                  {show ? <EyeSlashIcon /> : <EyeIcon />}
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
            <Button type="submit">
              Ingresar
            </Button>
            <hr />
            <Link to="/recovery" className="hover:underline text-meli-blue-primary-500 text-s text-center">
              Olvidé mi contraseña
            </Link>
          </form>
        </Card>
      </div>
    </PreAuthLayout>
  )
}
