import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {};

  return (
    <IconButton sx={{ color: 'white' }} onClick={handleLeaveRoom}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
