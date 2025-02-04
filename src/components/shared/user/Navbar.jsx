import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { NavLink } from '../../elements/user/NavLink';
import { Link, useNavigate } from 'react-router-dom';
import axios_instance from '../../../utils/apiConfig';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export const PreAuthNavbar = ({ className = '' }) => {

  return (
    <nav className={`flex gap-4 items-center lg:px-40 xl:px-56 p-3
      justify-between bg-meli-brand-500 ${className}`}
    >
      <Link to="/">
        <img src={"/img/logo_large_plus@2x.webp"} className="max-h-8"/>
      </Link>
    </nav>
  )
}

export const PosAuthNavbar = ({ className = '', openSidebar, setOpenSidebar }) => {

  const navigate = useNavigate();
  const account = useSelector(state => state.account)

  const logout = async () => {
    const url = `auth/logout`;

    await axios_instance.post(url, {}, {
      withCredentials: true
    })
      .then((res) => {
        console.log(res.data)
        sessionStorage.clear()
        navigate("/login")
      })
      .catch((err) => console.error(err))

  }

  return (
    <nav className={`p-3 lg:px-0 bg-meli-brand-500 border-b ${className}`}>
      <div className="mx-auto lg:w-3/4 xl:w-4/5 flex gap-4 justify-between items-center">
        <div className="flex gap-4 justify-between items-center">
          <NavLink as="button" className="lg:hidden" onClick={() => setOpenSidebar(!openSidebar)}>
            <Bars3Icon className="size-6 text-black" />
          </NavLink>
          <Link to="/">
            <img src={"/img/logo_large_plus@2x.webp"} className="max-h-8"/>
          </Link>          
        </div>

        <div className="flex gap-4 items-center">
          <Menu as="div" className="relative inline-block text-left">
            <NavLink 
              as={MenuButton} 
              className="inline-flex w-full justify-center items-center text-sm gap-2 rounded-full">
              <UserCircleIcon className="size-6" />
              <span className="hidden sm:block">
                {account?.name}
              </span>
              <div className="pr-2 hidden sm:block">
                <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-900 dark:text-gray-200" />
              </div>
            </NavLink>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 origin-top-right divide-y rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="">
                <div className="p-4 flex items-center gap-2 border-b">
                 <UserCircleIcon className="size-12" />
                  <div className="flex flex-col">
                    <span className="font-medium">{`Hola ${account?.name}`}</span>
                    <span className="font-base text-sm">{account?.email}</span>
                  </div>
                </div>
                <div className="py-2">
                  <MenuItem>
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Mi perfil
                    </NavLink>
                  </MenuItem>
                </div>
              </div>
              <div className="py-2">
                <MenuItem>
                  <a
                    href="#"
                    onClick={() => logout()}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Salir
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  )
}

export const Navbar = ({ className = '', openSidebar, setOpenSidebar }) => {
  const isLogged = sessionStorage.getItem('isLogged');

  if(isLogged) {
    return (
      <PosAuthNavbar 
        className={className}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
    )
  } else {
    return (
      <PreAuthNavbar />
    )
  }
}
