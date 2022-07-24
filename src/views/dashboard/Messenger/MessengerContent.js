import { styled } from '@mui/system';
import { shape, string } from 'prop-types';
import React, { useEffect } from 'react';
import { getDirectChatHistory } from '../../../rtc/socketConnection';
import Messages from './Messages';
import NewMessageInput from './NewMessageInput';

const Wrapper = styled('div')({
  flexGrow: 1,
});

const MessengerContent = ({ chatDetails }) => {
  useEffect(() => {
    /**
     * TODO:
     * fetching chat history from specific userId
     */
    getDirectChatHistory({ receiverUserId: chatDetails.id });
  }, [chatDetails]);
  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

MessengerContent.propTypes = {
  chatDetails: shape({
    id: string.isRequired,
    name: string.isRequired,
  }),
};

export default MessengerContent;
