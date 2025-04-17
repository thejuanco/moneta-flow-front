import React from 'react'
import { Navigate, Outlet } from 'react-router' 
import { useAuth } from '../../../../context/AuthProvider'

const PrivateRoute = () => {
    const { isAuthenticated, token, loading } = useAuth();

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (isAuthenticated && token) {
        return <Outlet />;
    } else {
        return <Navigate to="/auth/signin" />;
    }
};

export default PrivateRoute