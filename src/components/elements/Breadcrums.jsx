
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export const Breadcrums = ({ routes = [] }) => {
  return (
    <nav className="flex gap-2 items-center">
      { routes.map((item, index) => (
        <div className="flex gap-2 items-center" key={index}>
          {index !== 0 && <ChevronRightIcon className="size-4" />}
          {item.route ? 
            <Link to={item.route} className="text-meli-blue-500">
              {item.label}
            </Link>
          :
            <span>
              {item.label}
            </span>
          }
        </div>
      ))}
    </nav>
  )
}
