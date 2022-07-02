import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { getDashboardRoutes, getPublicRoutes } from './routes';
import AuthRoute from './helpers/AuthRoute';
import PublicRoute from './helpers/PublicRoute';

const publicRoutes = getPublicRoutes();
const dashboardRoutes = getDashboardRoutes();

const App = () => (
  <Routes>
    {/* === Dashboard Routes === */}
    <Route element={<AuthRoute />}>
      {dashboardRoutes.map(
        (route) => !route.disabled && <Route key={route.path} {...route} />
      )}
    </Route>

    {/* === Public Routes === */}
    <Route element={<PublicRoute />}>
      {publicRoutes.map(
        (route) => !route.disabled && <Route key={route.path} {...route} />
      )}
    </Route>
  </Routes>
);

export default App;
