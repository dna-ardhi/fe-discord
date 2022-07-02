import alertActions from '../actions/alertActions';

const initialState = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: payload,
      };
    case alertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: false,
        alertMessageContent: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
