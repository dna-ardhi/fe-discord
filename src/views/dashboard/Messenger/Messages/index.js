import { styled } from '@mui/system';
import React from 'react';
import { connect } from 'react-redux';
import MessagesHeader from './MessagesHeader';
import Message from './Message';
import { formatDate } from '../../../../helpers/formatter';
import DateSeparator from './DateSeparator';

const MainContainer = styled('div')({
  height: 'calc(100% - 60px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Messages = ({ chatDetails, messages }) => {
  return (
    <MainContainer>
      <MessagesHeader name={chatDetails?.name} />
      {messages.map((msg, idx) => {
        const sameAuthor =
          idx > 0 ? messages[idx - 1].author._id === msg.author._id : false;
        const sameDay =
          idx > 0
            ? formatDate(new Date(messages[idx - 1].date), 'dd/mm/yy') ===
              formatDate(new Date(msg.date), 'dd/mm/yy')
            : false;
        return (
          <div key={msg._id} style={{ width: '97%' }}>
            {(!sameDay || idx === 0) && (
              <DateSeparator>
                {formatDate(new Date(msg.date), 'dd/mm/yy')}
              </DateSeparator>
            )}
            <Message
              content={msg.content}
              username={msg.author.username}
              sameAuthor={sameAuthor}
              date={formatDate(new Date(msg.date), 'dd/mm/yy')}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

const mapStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStateToProps)(Messages);
