import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="p-6 bg-meli-gray-500 flex flex-wrap gap-4 justify-between text-center text-xs text-gray-400">
      <span>Copyright © 2018 MercadoLibre Venezuela S.R.L. RIF: J-30684267-5.</span>
      <div className="flex gap-4">
        <Link to="/">Términos y condiciones</Link>
        <Link to="/">Políticas de privacidad</Link>
        <Link to="/">Ayuda</Link>
      </div>
    </footer>
  )
}
