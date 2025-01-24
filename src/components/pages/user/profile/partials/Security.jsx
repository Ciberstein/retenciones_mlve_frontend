import { useState } from 'react'
import Card from '../../../../elements/Card'
import { Lock, PasswordOutlined } from '@mui/icons-material'
import { Input } from '../../../../elements/user/Input'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../elements/user/Button'
import { EnvelopeIcon, KeyIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Breadcrums } from '../../../../elements/Breadcrums'
import MenuItem from './MenuItem'
import { Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Password = () => {

  const [modify, setModify] = useState(false)
  const [showActualPw, setShowActualPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showNewPw2, setShowNewPw2] = useState(false);

  const { register, handleSubmit, formState: { errors }} = useForm();
  
  const submit = (data) => {
    console.log(data)
  }

  const routes = [
    {
      route: "/profile",
      label: "Mi perfil"
    },
    {
      route: "/profile/security",
      label: "Seguridad"
    },
    {
      route: "/profile/security/verify",
      label: "Métodos de verificación"
    },
    {
      route: false,
      label: "Contraseña"
    },
  ];

  if(modify) {
    return (
      <div className="flex flex-col gap-6">
        <Breadcrums routes={routes} />
        <Card className="flex flex-col">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
            <h4 className="font-medium">Actualizar contraseña</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:!col-span-2">
                <Input
                  id="actual_password"
                  name="actual_password"
                  type={showActualPw ? 'text' : 'password'}
                  label="Contraseña actual"
                  
                  element={
                    <button 
                      onClick={() => setShowActualPw(!showActualPw)} 
                      className="size-6 text-gray-400"
                      type="button"
                    >
                      {showActualPw ? <EyeSlashIcon /> : <EyeIcon />}
                    </button>
                  }
                  register={{
                    function: register,
                    errors: {
                      function: errors,
                      rules: {
                        required: 'Actual Password is required',
                      },
                    },
                  }}
                />
              </div>
              <Input
                id="new_password"
                name="new_password"
                type={showNewPw ? 'text' : 'password'}
                label="Contraseña nueva"
                element={
                  <button 
                    onClick={() => setShowNewPw(!showNewPw)} 
                    className="size-6 text-gray-400"
                    type="button"
                  >
                    {showNewPw ? <EyeSlashIcon /> : <EyeIcon />}
                  </button>
                }
                register={{
                  function: register,
                  errors: {
                    function: errors,
                    rules: {
                      required: 'New Password is required',
                    },
                  },
                }}
              />
              <Input
                id="repeat_password"
                name="repeat_password"
                type={showNewPw2 ? 'text' : 'password'}
                label="Repita la contraseña nueva"
                element={
                  <button 
                    onClick={() => setShowNewPw2(!showNewPw2)} 
                    className="size-6 text-gray-400"
                    type="button"
                  >
                    {showNewPw2 ? <EyeSlashIcon /> : <EyeIcon />}
                  </button>
                }
                register={{
                  function: register,
                  errors: {
                    function: errors,
                    rules: {
                      required: 'Repeat New Password',
                    },
                  },
                }}
              />
            </div>
            <Button type="submit">
              Actualizar
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <Breadcrums routes={routes} />
      <h1 className="text-2xl font-medium">Contraseña</h1>
      <div className="flex flex-col gap-6">
        <Card className="flex flex-col gap-4 !p-4">
          <div className="flex flex-col">
            <h1 className="text-lg">Contraseña</h1>
            <span>*************</span>            
          </div>
          <hr />
          <div>
            <Button hierarchy="transparent" size="sm" onClick={() => setModify(true)}>
              Modificar
            </Button>            
          </div>
        </Card>
      </div>
    </div>
  )
}

const Email = () => {
  return (
    <div>
      email
    </div>
  )
}

const Verify = () => {

  const account = useSelector(state => state.account)
  const location = useLocation().pathname;

  const routes = [
    {
      route: "/profile",
      label: "Mi perfil"
    },
    {
      route: "/profile/security",
      label: "Seguridad"
    },
    {
      route: false,
      label: "Métodos de verificación"
    },
  ];
  if(location !== "/profile/security/verify") return <Outlet />

  return (
    <div className="flex flex-col gap-6">
      <Breadcrums routes={routes} />
      <h1 className="text-2xl font-medium">Configura tus métodos de verificación</h1>
      <div className="flex flex-col gap-6">
        <Card className="flex flex-col !px-0 !py-4">
          <MenuItem
            icon={<PasswordOutlined className="size-6" />}
            url="/profile/security/verify/password"
            title="Contraseña"
            desc="*************"
          />
          <MenuItem
            icon={<EnvelopeIcon className="size-6" />}
            url="/profile/security/verify/email"
            title="E-mail"
            desc={account?.email}
          />
        </Card>
      </div>
    </div>
  )
}

const Security = () => {

  const location = useLocation().pathname;

  const routes = [
    {
      route: "/profile",
      label: "Mi perfil"
    },
    {
      route: false,
      label: "Seguridad"
    },
  ];

  if(location !== "/profile/security") return <Outlet />

  return (
    <div className="flex flex-col gap-6">
      <Breadcrums routes={routes} />
      <div className="flex flex-col gap-6">
        <Card className="flex flex-col !px-0 !py-4">
          <MenuItem
            icon={<KeyIcon className="size-6" />}
            url="/profile/security/verify"
            title="Métodos de verificación"
            desc="Activa los métodos necesarios de verificación para proteger tu cuenta"
          />
        </Card>
      </div>
    </div>
  )
}

Security.Verify = Verify;
Verify.Password = Password;
Verify.Email = Email;

export { Security }