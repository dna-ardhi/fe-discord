import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PublicRoute = () => {
  const location = useLocation();
  const authToken = localStorage.getItem('user');
  return authToken ? (
    <Navigate to='/' state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
