import { useState } from 'react'
import Card from '../../../../elements/Card'
import { Lock } from '@mui/icons-material'
import { Input } from '../../../../elements/user/Input'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../elements/user/Button'

export const SecuritySection = () => {

  const [showActualPw, setShowActualPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showNewPw2, setShowNewPw2] = useState(false);

  const { register, handleSubmit, formState: { errors }} = useForm();

  const submit = (data) => {
    console.log(data)
  }

  return (
    <Card className="flex flex-col !p-0">
      <div className="flex gap-2 items-center p-4 border-b">
        <Lock />
        <h3 className="text-lg font-medium">Seguridad</h3>
      </div>
      <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit(submit)}>
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
  )
}

