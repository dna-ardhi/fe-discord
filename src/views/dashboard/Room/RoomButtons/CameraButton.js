import React, { useState } from 'react';
import VideoCamIcon from '@mui/icons-material/Videocam';
import VideoCamOffIcon from '@mui/icons-material/VideocamOff';
import { IconButton } from '@mui/material';

const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(false);

  const handleToggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
  };
  return (
    <IconButton onClick={handleToggleCamera} sx={{ color: 'white' }}>
      {cameraEnabled ? <VideoCamIcon /> : <VideoCamOffIcon />}
    </IconButton>
  );
};

export default CameraButton;
