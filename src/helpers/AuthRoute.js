import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActions } from '../store/actions/authAction';
import { connectWithSocketServer } from '../rtc/socketConnection';

const AuthRoute = ({ setUserDetails }) => {
  const location = useLocation();
  const authToken = localStorage.getItem('user');

  if (authToken) {
    setUserDetails(JSON.parse(authToken));
    connectWithSocketServer(JSON.parse(authToken));
  }

  return authToken ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AuthRoute);
