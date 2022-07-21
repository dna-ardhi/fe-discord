import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Avatar from '../../../../components/Avatar';

const MainContainer = styled('div')({
  width: '98%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
});

const MessagesHeader = ({ name = '' }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        variant='h4'
        sx={{
          fontWeight: 'bold',
          color: 'white',
          mx: '5px',
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: '#b9bbbe',
          mx: '5px',
        }}
      >
        This is the beginning of your conversation with {name}
      </Typography>
    </MainContainer>
  );
};

MessagesHeader.propTypes = {};

export default MessagesHeader;
