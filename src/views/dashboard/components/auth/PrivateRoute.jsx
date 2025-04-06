import React from 'react'
import { Navigate, Outlet } from 'react-router' 
import { useAuth } from '../../../../context/AuthProvider'


const PrivateRoute = () => {
    const { isAuthenticated, token } = useAuth();
  
    if (isAuthenticated && token) {
        console.log("Hay token de la ruta privada")
        return <Outlet />;
    } else {
        console.log("No hay token de la ruta privada")
        return <Navigate to="/auth/signin" />;
    }
  
  };

export default PrivateRoute