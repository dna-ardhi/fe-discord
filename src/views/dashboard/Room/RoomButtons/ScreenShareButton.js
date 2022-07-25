import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';

const ScreenShareButton = () => {
  const [screenShareEnabled, setScreenShareEnabled] = useState(false);

  const handleToggleScreenShare = () => {
    setScreenShareEnabled(!screenShareEnabled);
  };
  return (
    <IconButton onClick={handleToggleScreenShare} sx={{ color: 'white' }}>
      {screenShareEnabled ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
