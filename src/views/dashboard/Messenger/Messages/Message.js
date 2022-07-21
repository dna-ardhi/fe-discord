import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { bool, string } from 'prop-types';
import React from 'react';
import Avatar from '../../../../components/Avatar';

const MainContainer = styled('div')({
  width: '97%',
  display: 'flex',
  marginTop: '10px',
});

const AvatarContainer = styled('div')({
  width: '70px',
});

const MessageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const MessageContent = styled('div')({
  color: '#dcddde',
});

const SameAuthorMessageContent = styled('div')({
  color: '#dcddde',
  width: '97%',
});

const SameAuthorMessageText = styled('span')({
  marginLeft: '70px',
});

const Message = ({ content, sameAuthor, username, date, sameDay }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography sx={{ fontSize: '16px', color: 'white' }}>
          {username}{' '}
          <span style={{ fontSize: '12px', color: '#72767d' }}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

Message.propTypes = {
  content: string.isRequired,
  sameAuthor: bool,
  username: string.isRequired,
  date: string.isRequired,
  sameDay: bool,
};

export default Message;
