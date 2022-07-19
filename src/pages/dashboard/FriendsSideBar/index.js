import { styled } from '@mui/system';
import React from 'react';
import AddFriendButton from './AddFriendButton';
import FriendsList from './FriendsList';
import FriendsTitle from './FriendsTitle';

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2f3136',
});

const DUMMY_FRIENDS = [
  {
    _id: 1,
    username: 'Mark',
    isOnline: true,
  },
  {
    _id: 2,
    username: 'Anna',
    isOnline: false,
  },
  {
    _id: 3,
    username: 'Jhon',
    isOnline: false,
  },
];

const DUMMY_FRIENDS_INVITATIONS = [
  {
    _id: 1,
    senderId: {
      username: 'Mark',
      email: 'dummy@mail.com',
    },
  },
  {
    _id: 2,
    senderId: {
      username: 'Jhon',
      email: 'jhon@mail.com',
    },
  },
];

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle>Private Message</FriendsTitle>
      <FriendsList data={DUMMY_FRIENDS} />
      <FriendsTitle>Invitations</FriendsTitle>
      <FriendsList data={DUMMY_FRIENDS_INVITATIONS} type='invitations' />
    </MainContainer>
  );
};

export default FriendsSideBar;
