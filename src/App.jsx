import { Routes, Route, Navigate } from "react-router-dom"
import { Loader } from "./components/shared/Loader";

{/* Auth Imports */}
import { LoginPage } from "./components/pages/auth/login/LoginPage";
import { RecoveryPage } from "./components/pages/auth/recovery/RecoveryPage";
{/* End Auth Imports */}

{/* User Imports */}
import { ProtectedRoutes as UserProtectedRoutes } from "./components/pages/session/user/ProtectedRoutes";
import { HomePage as UserHomePage } from "./components/pages/user/home/HomePage";
import { InvoicesPage as UserInvoicesPage } from "./components/pages/user/invoices/InvoicesPage";
import { ProfilePage as UserProfilePage } from "./components/pages/user/profile/ProfilePage";
{/* End User Imports */}

{/* Admin Imports */}
import { ProtectedRoutes as AdminProtectedRoutes } from "./components/pages/session/admin/ProtectedRoutes";
import { HomePage as AdminHomePage } from "./components/pages/admin/home/HomePage";
import { InvoicesPage as AdminInvoicesPage } from "./components/pages/admin/invoices/InvoicesPage";
import { AccountsPage as AdminAccountsPage } from "./components/pages/admin/accounts/AccountsPage";
import { CustomersPage as AdminCustomersPage } from "./components/pages/admin/customers/CustomersPage";
{/* End Admin Imports */}

function App() {
  return (
    <div>
      <Loader />
      <Routes>
        <Route path="*" element={<Navigate to="/" />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/recovery" element={<RecoveryPage />}/>
        <Route path="/" element={<UserProtectedRoutes />}>
          <Route path="*" element={<Navigate to="/" />}/>
          <Route path="/" element={<UserHomePage />}/>
          <Route path="/invoices" element={<UserInvoicesPage />}/>
          <Route path="/profile" element={<UserProfilePage />}>
            <Route path="security" element={<UserProfilePage.Security />}>
              <Route path="verify" element={<UserProfilePage.Security.Verify />}>
                <Route path="password" element={<UserProfilePage.Security.Verify.Password />} />
                <Route path="email" element={<UserProfilePage.Security.Verify.Email />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="/admin" element={<AdminProtectedRoutes />}>
          <Route path="*" element={<Navigate to="/admin" />}/>
          <Route path="/admin" element={<AdminHomePage />}/>
          <Route path="accounts" element={<AdminAccountsPage />}/>
          <Route path="invoices" element={<AdminInvoicesPage />}/>
          <Route path="customers" element={<AdminCustomersPage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
