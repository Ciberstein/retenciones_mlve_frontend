import { useEffect, useState } from 'react'
import { Navbar } from '../shared/user/Navbar'
import { Footer } from '../shared/user/Footer'
import { Sidebar } from '../shared/user/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from '../../store/slices/refresh.slice'
import axios_instance from '../../utils/apiConfig'

export const PosAuthLayout = ({ children, className = '' }) => {

  const refresh = useSelector((state) => state.refresh)
  const [openSidebar, setOpenSidebar] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk())
  }, []);

  useEffect(() => {
    axios_instance.defaults.headers.common['Authorization'] = `Bearer ${refresh}`;
  }, [refresh]);

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
