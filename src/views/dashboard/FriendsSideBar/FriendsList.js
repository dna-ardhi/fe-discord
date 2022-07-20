import { styled } from '@mui/system';
import { arrayOf, object, oneOf } from 'prop-types';
import React from 'react';
import FriendsListItem from './FriendsListItem';
import PendingInvitationsList from './PendingInvitationsList';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = ({ data, type = 'friends' }) => {
  return (
    <MainContainer>
      {data.map((friend) => {
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
  type: oneOf(['friends', 'invitations']),
};

export default FriendsList;
