import { Typography } from '@mui/material';
import React from 'react';

const FriendsTitle = ({ children }) => {
  return (
    <Typography
      sx={{
        textTransform: 'uppercase',
        color: '#8e9297',
        fontSize: '14px',
      }}>
      {children}
    </Typography>
  );
};

export default FriendsTitle;
