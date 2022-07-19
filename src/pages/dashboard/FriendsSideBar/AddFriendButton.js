import React, { useState } from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
  marginTop: '10px',
  marginBottom: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '#3ba55d',
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <PrimaryButton
        additionalStyles={additionalStyles}
        onClick={handleOpenAddFriendDialog}>
        Add Friend
      </PrimaryButton>
      <AddFriendDialog
        isOpen={isDialogOpen}
        close={handleCloseAddFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;
