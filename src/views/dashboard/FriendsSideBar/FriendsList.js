import { styled } from '@mui/system';
import { arrayOf, object, oneOf } from 'prop-types';
import React from 'react';
import FriendsListItem from './FriendsListItem';
import PendingInvitationsList from './PendingInvitationsList';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = ({ data, onlineUsers, type = 'friends' }) => {
  const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    friends.forEach((friend) => {
      const isOnline = onlineUsers.find((user) => user.userId === friend.id);
      friend.isOnline = !!isOnline;
    });

    return friends;
  };
  return (
    <MainContainer>
      {checkOnlineUsers(data, onlineUsers).map((friend) => {
        switch (type) {
          case 'invitations':
            return (
              <PendingInvitationsList
                key={friend._id}
                id={friend._id}
                username={friend.senderId.username}
                email={friend.senderId.email}
              />
            );
          default:
            return (
              <FriendsListItem
                username={friend.username}
                key={friend.id}
                id={friend.id}
                isOnline={friend.isOnline}
              />
            );
        }
      })}
    </MainContainer>
  );
};

FriendsList.propTypes = {
  data: arrayOf(object).isRequired,
  onlineUsers: arrayOf(object),
  type: oneOf(['friends', 'invitations']),
};

export default FriendsList;
