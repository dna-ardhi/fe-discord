import * as api from '../../api';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, Navigate) => dispatch(login(userDetails, Navigate)),
    register: (userDetails, Navigate) =>
      dispatch(register(userDetails, Navigate)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    payload: userDetails,
  };
};

const login = (userDetails, Navigate) => async (dispatch) => {
  const response = await api.login(userDetails);

  if (response.error) {
    // show error message in alert
  } else {
    const { userDetails } = response?.data;
    localStorage.setItem('user', userDetails);

    dispatch(setUserDetails(userDetails));
    Navigate('/dashboard');
  }
};

const register = (userDetails, Navigate) => async (dispatch) => {
  const response = await api.register(userDetails);

  if (response.error) {
    // show error message in alert
  } else {
    const { userDetails } = response?.data;
    localStorage.setItem('user', userDetails);

    dispatch(setUserDetails(userDetails));
    Navigate('/dashboard');
  }
};
