import { styled } from '@mui/system';
import React from 'react';
import { connect } from 'react-redux';
import MessengerContent from './MessengerContent';
import WelcomeMessage from './WelcomeMessage';

const MainContainer = styled('div')({
  flexGrow: 1,
  backgroundColor: '#36393f',
  marginTop: '48px',
  display: 'flex',
});

const Messenger = ({ chatDetails }) => {
  return (
    <MainContainer>
      {!chatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chatDetails={chatDetails} />
      )}
    </MainContainer>
  );
};

const mapStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStateToProps)(Messenger);
