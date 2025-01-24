import { Navbar } from '../shared/user/Navbar'
import { PreFooter as Footer } from '../shared/user/Footer'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const PreAuthLayout = ({ children, className }) => {

  const sessionAuth = sessionStorage.getItem('authToken');

  useEffect(() => {
    if (sessionAuth) Navigate('/');
  }, [sessionAuth]);

  return (
    <div className="bg-bottom bg-cover bg-no-repeat">
      <div className="w-full h-screen flex flex-col gap-8 justify-center mx-auto">
        <Navbar />
        <div className={`col-span-3 h-full overflow-y-auto px-6 xl:px-56 ${className}`}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
