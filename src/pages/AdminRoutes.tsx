import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AdminRoutes = () => {
  const { isAdmin } = useAuth();
  const location = useLocation();

  if(!isAdmin){
    return <Navigate to="/unauthorized" state={{from: location}} replace />
  }
  
  return (
    <Outlet/>
  )
}

export default AdminRoutes