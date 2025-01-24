import { Link } from "react-router-dom"

export const PreFooter = () => {
  return (
    <footer className="p-6 flex flex-wrap gap-4 justify-between text-center text-xs text-gray-400 bg-solid-gray-100">
      <span>Copyright © 2018 MercadoLibre Venezuela S.R.L. RIF: J-30684267-5.</span>
      <div className="flex gap-4">
        <Link to="/">Términos y condiciones</Link>
        <Link to="/">Políticas de privacidad</Link>
        <Link to="/">Ayuda</Link>
      </div>
    </footer>
  )
}

export const PosFooter = () => {
  return (
    <footer className="p-6 border-t flex flex-wrap gap-4 justify-between text-center text-xs text-gray-400">
      <span>Copyright © 2018 MercadoLibre Venezuela S.R.L. RIF: J-30684267-5.</span>
      <div className="flex gap-4">
        <Link to="/">Términos y condiciones</Link>
        <Link to="/">Políticas de privacidad</Link>
        <Link to="/">Ayuda</Link>
      </div>
    </footer>
  )
}
