import { Navigate } from 'react-router-dom';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import Dashboard from '../views/dashboard';
import NotFound from '../views/NotFound';

export const getPublicRoutes = () => [
  {
    path: 'register',
    index: false,
    caseSensitive: false,
    element: <Register />,
    disabled: false,
  },
  {
    path: 'login',
    index: false,
    caseSensitive: false,
    element: <Login />,
    disabled: false,
  },
  {
    path: '*',
    index: false,
    caseSensitive: false,
    element: <NotFound />,
    disabled: false,
  },
];

export const getDashboardRoutes = () => [
  {
    path: null,
    index: true,
    caseSensitive: false,
    element: <Navigate to='/dashboard' />,
    disabled: false,
  },
  {
    path: '/dashboard',
    index: false,
    caseSensitive: false,
    element: <Dashboard />,
    disabled: false,
  },
];
