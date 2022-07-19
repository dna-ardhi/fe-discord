import { styled } from '@mui/system';
import { arrayOf, object } from 'prop-types';
import React from 'react';
import FriendsListItem from './FriendsListItem';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = ({ data }) => {
  return (
    <MainContainer>
      {data.map((friend) => (
        <FriendsListItem
          username={friend.username}
          key={friend.id}
          id={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </MainContainer>
  );
};

FriendsList.propTypes = {
  data: arrayOf(object).isRequired,
};

export default FriendsList;
