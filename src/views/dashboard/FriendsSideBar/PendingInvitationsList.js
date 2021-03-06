import { Box, Tooltip, Typography } from '@mui/material';
import { func, number, oneOfType, string } from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Avatar from '../../../components/Avatar';
import { getActions } from '../../../store/actions/friendsAction';
import InvitationDecisionsButton from './InvitationDecisionsButton';

const PendingInvitationsList = ({ id, username, email, accept, reject }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptInvitations = () => {
    accept({ id });
    setButtonDisabled(true);
  };

  const handleRejectInvitations = () => {
    reject({ id });
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={email}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            mt: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              ml: '7px',
              fontWeight: 700,
              color: '#8e9297',
              flexGrow: 1,
            }}
            variant='subtitle1'
          >
            {username}
          </Typography>
          <InvitationDecisionsButton
            disabled={buttonDisabled}
            acceptInv={handleAcceptInvitations}
            rejectInv={handleRejectInvitations}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

PendingInvitationsList.propTypes = {
  id: oneOfType([number, string]).isRequired,
  username: string.isRequired,
  email: string.isRequired,
  accept: func.isRequired,
  reject: func.isRequired,
};

export default connect(null, mapActionToProps)(PendingInvitationsList);
