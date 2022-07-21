import { styled } from '@mui/system';
import React from 'react';
import { connect } from 'react-redux';
import MessagesHeader from './MessagesHeader';
import DUMMY_MESSAGES from './DUMMY_MESSAGES.json';
import Message from './Message';

const MainContainer = styled('div')({
  height: 'calc(100% - 60px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Messages = ({ chatDetails }) => {
  return (
    <MainContainer>
      <MessagesHeader name={chatDetails?.name} />
      {DUMMY_MESSAGES.map((msg, idx) => (
        <Message
          key={msg._id}
          content={msg.content}
          username={msg.author.username}
          sameAuthor={msg.sameAuthor}
          date={msg.date}
          sameDay={msg.sameDay}
        />
      ))}
    </MainContainer>
  );
};

const mapStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStateToProps)(Messages);
