import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { bool, func } from 'prop-types';
import React from 'react';
import CloseFullScreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const MainContainer = styled('div')({
  position: 'absolute',
  bottom: '8px',
  right: '8px',
});

const ResizeRoomButton = ({ isRoomMinimized, handleResize }) => {
  return (
    <MainContainer>
      <IconButton sx={{ color: 'white' }} onClick={handleResize}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullScreenIcon />}
      </IconButton>
    </MainContainer>
  );
};

ResizeRoomButton.propTypes = {
  isRoomMinimized: bool.isRequired,
  handleResize: func.isRequired,
};

export default ResizeRoomButton;
