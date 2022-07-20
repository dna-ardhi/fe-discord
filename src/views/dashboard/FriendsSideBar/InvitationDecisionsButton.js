import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';
import { bool, func } from 'prop-types';

const InvitationDecisionsButton = ({ disabled, acceptInv, rejectInv }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        sx={{ color: 'white' }}
        disabled={disabled}
        onClick={acceptInv}>
        <CheckIcon />
      </IconButton>
      <IconButton
        sx={{ color: 'white' }}
        disabled={disabled}
        onClick={rejectInv}>
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

InvitationDecisionsButton.propTypes = {
  disabled: bool,
  acceptInv: func.isRequired,
  rejectInv: func.isRequired,
};

export default InvitationDecisionsButton;
