import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../../helpers/validator';
import InputWithLabel from '../../../components/InputWithLabel';
import { bool, func } from 'prop-types';
import PrimaryButton from '../../../components/PrimaryButton';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/friendsAction';

const AddFriendDialog = ({ isOpen, close, sendFriendInvitations }) => {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitations = () => {
    // send friends request
    sendFriendInvitations({ targetEmail: email }, handleCloseDialog);
  };

  const handleCloseDialog = () => {
    close();
    setEmail('');
  };

  useEffect(() => {
    setIsFormValid(validateEmail(email));
  }, [email, setIsFormValid]);

  return (
    <>
      <Dialog open={isOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a friends</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter email address of friend which you would like to invite
          </DialogContentText>
          <InputWithLabel
            controllerId='emailInvitation'
            label='email'
            value={email}
            setValue={setEmail}
            type='email'
            placeholder='Enter email address'
          />
        </DialogContent>
        <DialogActions>
          <PrimaryButton
            onClick={handleSendInvitations}
            disabled={!isFormValid}
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
            }}>
            Send
          </PrimaryButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

AddFriendDialog.propTypes = {
  isOpen: bool.isRequired,
  close: func.isRequired,
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionToProps)(AddFriendDialog);
