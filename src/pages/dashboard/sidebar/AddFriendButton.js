import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';

const additionalStyles = {
  marginTop: '10px',
  marginBottom: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '#3ba55d',
};

const AddFriendButton = () => {
  const handleOpenAddFriendDialog = () => {};

  return (
    <>
      <PrimaryButton
        additionalStyles={additionalStyles}
        onClick={handleOpenAddFriendDialog}>
        Add Friend
      </PrimaryButton>
    </>
  );
};

export default AddFriendButton;
