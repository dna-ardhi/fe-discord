import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActions } from '../store/actions/authAction';
import { connectWithSocketServer } from '../rtc/socketConnection';

const AuthRoute = ({ setUserDetails }) => {
  const location = useLocation();
  const authToken = localStorage.getItem('user');

  useEffect(() => {
    if (authToken) {
      setUserDetails(JSON.parse(authToken));
      connectWithSocketServer(JSON.parse(authToken));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
