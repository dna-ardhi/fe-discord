import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthRoute = () => {
  const location = useLocation();
  const authToken = localStorage.getItem('user');

  return authToken ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default AuthRoute;
