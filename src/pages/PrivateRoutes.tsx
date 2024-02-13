import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../Hooks/useAuth"

const PrivateRoutes = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{from: location}} replace />
  }

  return <Outlet />
}

export default PrivateRoutes
