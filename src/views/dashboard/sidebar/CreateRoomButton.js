import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import * as roomHandler from '../../../rtc/roomHandler';

const CreateRoomButton = () => {
  const createNewRoomHandler = () => {
    roomHandler.createNewRoom();
  };

  return (
    <Button
      onClick={createNewRoomHandler}
      sx={{
        width: '48px',
        height: '48px',
        borderRadius: '16px',
        m: 0,
        padding: 0,
        minWidth: 0,
        mt: '10px',
        color: 'white',
        bgcolor: '#5865f2',
      }}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateRoomButton;
