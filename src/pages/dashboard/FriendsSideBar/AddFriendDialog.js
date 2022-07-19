import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../../helpers/validator';
import InputWithLabel from '../../../components/InputWithLabel';
import { bool, func } from 'prop-types';

const AddFriendDialog = ({
  isOpen,
  close,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitations = () => {
    // send friends request
  };

  const handleCloseDialog = () => {
    close();
    setMail('');
  };

  useEffect(() => {
    setIsFormValid(validateEmail(mail));
  }, [mail, setIsFormValid]);

  return (
    <>
      <Dialog open={isOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a friends</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter email address of friend which you would like to invite
            </Typography>
            <InputWithLabel
              controllerId='emailInvitation'
              label='mail'
              value={mail}
              setValue={setMail}
              type='email'
              placeholder='Enter email address'
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

AddFriendDialog.propTypes = {
  isOpen: bool.isRequired,
  close: func.isRequired,
};

export default AddFriendDialog;
