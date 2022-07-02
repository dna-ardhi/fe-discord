import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { connect } from 'react-redux';
import { getActions } from '../store/actions/alertActions';

const AlertNotification = ({
  close,
  showAlertMessage,
  alertMessageContent,
  ...props
}) => {
  return (
    <div>
      <Snackbar
        open={showAlertMessage}
        autoHideDuration={5000}
        onClose={close}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={close} severity='warning' sx={{ width: '100%' }}>
          {alertMessageContent}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = ({ alert }) => {
  return {
    ...alert,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(mapStateToProps, mapActionToProps)(AlertNotification);
