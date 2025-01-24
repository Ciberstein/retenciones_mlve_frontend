import { PreAuthLayout } from '../../../layouts/PreAuthLayout'
import Card from '../../../elements/Card'
import { Input } from '../../../elements/user/Input'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Button } from '../../../elements/user/Button'
import { useForm } from 'react-hook-form'
import axios_instance from '../../../../utils/apiConfig'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { MailOutline } from '@mui/icons-material'
import { EmailSent } from './partials/EmailSent'
import { RecoveryPasswordForm } from './partials/RecoveryPasswordForm'

export const RecoveryPage = () => {

  const { register, handleSubmit, formState: { errors }} = useForm();
  const [emailSent, setEmailSent] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get('username');
  const token = queryParams.get('token');

  console.log(username, token)

  const submit = async (data) => {

    const url = `/auth/forgot_password`;

    await axios_instance.post(url, data, {
      withCredentials: true
    })
      .then(() => setEmailSent(true))
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
  }
  
  if(emailSent) return <EmailSent />

  if(username && token) return <RecoveryPasswordForm username={username} token={token} />

  return (
    <PreAuthLayout className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-3 font-medium text-center">
        <h1 className="text-2xl md:text-4xl">
          Recuperar contraseña
        </h1>
        <div className="text-center flex flex-col items-center">
          <span>A continuación,</span>
          <span>ingresa tu dirección de correo electrónico</span>
        </div>
      </div>
      <div>
        <Card className="w-full sm:min-w-96 border shadow-none">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit(submit)}>
            <Input
              id="email"
              name="email"
              type="email"
              label="Correo electrónico"
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
            <Button type="submit" size="lg">
              Enviar
            </Button>
            <hr />
            <Link to="/login" className="hover:underline text-meli-blue-500 text-s text-center">
              Iniciar sesión
            </Link>
          </form>
        </Card>
      </div>
    </PreAuthLayout>
  )
}
