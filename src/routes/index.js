import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

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
    element: <Dashboard />,
    disabled: false,
  },
];
