const alertActions = {
  OPEN_ALERT_MESSAGE: 'ALERT.OPEN_ALERT_MESSAGE',
  CLOSE_ALERT_MESSAGE: 'ALERT.CLOSE_ALERT_MESSAGE',
};

export const getActions = (dispatch) => {
  return {
    open: (content) => dispatch(notify(content)),
    close: () => dispatch(closeAlert()),
  };
};

export const notify = (content) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    payload: content,
  };
};

export const closeAlert = () => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
  };
};

export default alertActions;
