import { Button, Typography } from '@mui/material';
import { bool, number, oneOfType, string } from 'prop-types';
import { chatTypes, getActions } from '../../../store/actions/chatActions';
import React from 'react';
import Avatar from '../../../components/Avatar';
import OnlineIndicator from './OnlineIndicator';
import { connect } from 'react-redux';

const FriendsListItem = ({ id, username, isOnline, setChatDetails }) => {
  const handleChoseActiveConversation = () => [
    setChatDetails({ id, name: username }, chatTypes.DIRECT),
  ];
  return (
    <Button
      onClick={handleChoseActiveConversation}
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
      }}
    >
      <Avatar username={username} />
      <Typography
        sx={{
          ml: '7px',
          fontWeight: 700,
          color: '#8e9297',
        }}
        variant='subtitle1'
        align='left'
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

FriendsListItem.propTypes = {
  id: oneOfType([number, string]).isRequired,
  username: string.isRequired,
  isOnline: bool,
};

export default connect(null, mapActionToProps)(FriendsListItem);
