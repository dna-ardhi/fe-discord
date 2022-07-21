import { Typography } from '@mui/material';
import { string } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const ChosenOptionLabel = ({ name }) => {
  return (
    <Typography
      sx={{
        fontSize: '16px',
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      {name && name}
    </Typography>
  );
};

const mapStateToProps = ({ chat }) => {
  return {
    name: chat.chatDetails?.name,
  };
};

ChosenOptionLabel.propTypes = {
  name: string,
};

export default connect(mapStateToProps)(ChosenOptionLabel);
