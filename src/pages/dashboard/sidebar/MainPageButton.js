import React from 'react';
import { Button } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';

const MainPageButton = () => {
  return (
    <Button
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
      }}>
      <GroupsIcon />
    </Button>
  );
};

export default MainPageButton;
