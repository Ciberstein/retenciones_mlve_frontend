import { Outlet } from 'react-router-dom';
import { PosAuthLayout } from '../../../layouts/PosAuthLayout';
import { Landing } from '../../Landing';
import { LoginPage } from '../../auth/login/LoginPage';

export const ProtectedRoutes = () => {

    const isLogged = sessionStorage.getItem("isLogged")

    if (isLogged)
      return (
        <PosAuthLayout>
          <Outlet />
        </PosAuthLayout>
      );
  
    return <LoginPage />; // Landing
  };