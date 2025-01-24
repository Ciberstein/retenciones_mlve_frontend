import { useEffect, useState } from 'react'
import { Navbar } from '../shared/user/Navbar'
import { Footer } from '../shared/user/Footer'
import { Sidebar } from '../shared/user/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from '../../store/slices/refresh.slice'
import axios_instance from '../../utils/apiConfig'
import { accountThunk } from '../../store/slices/account.slice'

export const PosAuthLayout = ({ children, className = '' }) => {

  const refresh = useSelector((state) => state.refresh)
  const [openSidebar, setOpenSidebar] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk())
    dispatch(accountThunk())
  }, []);

  useEffect(() => {
    axios_instance.defaults.headers.common['Authorization'] = `Bearer ${refresh}`;
  }, [refresh]);

  return (
    <div className="bg-bottom bg-cover bg-no-repeat">
      <div className="w-full h-screen flex flex-col justify-center">
        <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        <div className="h-full grid col-span-3 lg:grid-cols-6 overflow-hidden mx-auto w-full">
          <Sidebar open={openSidebar} setOpen={setOpenSidebar}/>
          <div className="col-span-5 h-full overflow-y-auto dark:text-white p-6 bg-solid-gray-100">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
