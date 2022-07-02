import { authActions } from '../actions/authAction';

const initialState = {
  userDetails: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
