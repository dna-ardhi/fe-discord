import React, { StrictMode } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PublicRoute = () => {
  const location = useLocation();
  const authToken = localStorage.getItem('user');
  return authToken ? (
    <Navigate to='/' state={{ from: location }} replace />
  ) : (
    <StrictMode>
      <Outlet />
    </StrictMode>
  );
};

export default PublicRoute;
