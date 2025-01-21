import { useState } from 'react'
import { Navbar } from '../shared/user/Navbar'
import { Footer } from '../shared/user/Footer'
import { Sidebar } from '../shared/user/Sidebar'

export const PosAuthLayout = ({ children, className = '' }) => {

  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <div className="bg-bottom bg-cover bg-no-repeat dark:bg-zinc-800">
      <div className="w-full h-screen flex flex-col gap-6 justify-center">
        <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        <div className="h-full grid col-span-3 lg:grid-cols-5 gap-6 overflow-hidden mx-auto w-full lg:w-3/4 xl:w-4/5">
          <Sidebar open={openSidebar} setOpen={setOpenSidebar}/>
          <div className="col-span-4 h-full overflow-y-auto dark:text-white px-6 lg:p-0">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
