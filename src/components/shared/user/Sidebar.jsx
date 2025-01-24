
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { HomeIcon, QueueListIcon, UsersIcon, UserGroupIcon } from '@heroicons/react/24/outline';

import { Link, useLocation } from 'react-router-dom'
import { NavLink } from '../../elements/user/NavLink';

export const ContentSidebar = () => {

  const location = useLocation().pathname;

  const active = (path) => {
    if(path === location) return '!border-meli-blue-500 !font-medium'
    return 'hover:border-meli-blue-500'
  }

  const user_nav = [
    {
      label: 'Inicio',
      route: '/',
      icon: <HomeIcon className="size-6" />
    },
    {
      label: 'Facturas',
      route: '/invoices',
      icon: <QueueListIcon className="size-6" />
    },
  ];

  const admin_nav = [
    {
      label: 'Inicio',
      route: '/admin',
      icon: <HomeIcon className="size-6" />
    },
    {
      label: 'Facturas',
      route: '/admin/invoices',
      icon: <QueueListIcon className="size-6" />
    },
    {
      label: 'Usuarios',
      route: '/admin/accounts',
      icon: <UsersIcon className="size-6" />
    },
    {
      label: 'Clientes',
      route: '/admin/customers',
      icon: <UserGroupIcon className="size-6" />
    },
  ];

  return (
    <div className="flex flex-col">
      {
        admin_nav.map(item => (
          <NavLink as={Link} to={item.route} 
            className={`${active(item.route)} flex items-center !p-0 text-solid-gray-550 !bg-transparent
              border-l-4 border-transparent text-sm hover:border-meli-blue-500 font-normal`
            } 
            key={item.label}
          >
            <span className="p-4">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))
      }
    </div>
  )
}

export const DialogSidebar = ({ open, setOpen, children }) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-auto bg-solid-gray-100 shadow-xl gap-12">
                <header className="flex gap-4 justify-between items-center p-4">
                  <img src={"/img/logo_large_plus@2x.webp"} className="max-h-10"/>
                  <button className="hover:text-gray-400 text-gray-900 transition-colors ease-out"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </header>
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export const Sidebar = ({
  open,
  setOpen
}) => {
  return (
    <>
      <DialogSidebar open={open} setOpen={setOpen}>
        <ContentSidebar />
      </DialogSidebar>
      <aside className="hidden lg:block pt-12">
        <ContentSidebar />
      </aside>
    </>
  )
}
