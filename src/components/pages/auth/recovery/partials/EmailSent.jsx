import { PreAuthLayout } from '../../../../layouts/PreAuthLayout'
import { MailOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const EmailSent = () => {
  return (
    <PreAuthLayout className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-3 font-medium text-center items-center">
        <MailOutline className="!w-20 !h-20" />
        <h1 className="text-2xl md:text-4xl">
          E-mail enviado
        </h1>
        <div className="text-center flex flex-col items-center">
          <span>A continuación,</span>
          <span>Siga los pasos indicados en el mensaje recibido en su bandeja de entrada</span>
        </div>
        <Link to="/login" className="hover:underline text-meli-blue-500 text-s text-center">
          Volver al inicio
        </Link>
      </div>
    </PreAuthLayout>
  )
}
