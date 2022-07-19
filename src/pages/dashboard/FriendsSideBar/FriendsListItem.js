import { Button, Typography } from '@mui/material';
import { bool, number, string } from 'prop-types';
import React from 'react';
import Avatar from '../../../components/Avatar';
import OnlineIndicator from './OnlineIndicator';

const FriendsListItem = ({ id, username, isOnline }) => {
  return (
    <Button
      sx={{
        width: '100%',
        height: '42px',
        mt: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: 'black',
        position: 'relative',
      }}>
      <Avatar username={username} />
      <Typography
        sx={{
          ml: '7px',
          fontWeight: 700,
          color: '#8e9297',
        }}
        variant='subtitle1'
        align='left'>
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

FriendsListItem.propTypes = {
  id: number,
  username: string.isRequired,
  isOnline: bool.isRequired,
};
export default FriendsListItem;
