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
    id: 1,
    username: 'Mark',
    isOnline: true,
  },
  {
    id: 2,
    username: 'Anna',
    isOnline: false,
  },
  {
    id: 3,
    username: 'Jhon',
    isOnline: false,
  },
];

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle>Private Message</FriendsTitle>
      <FriendsList data={DUMMY_FRIENDS} />
      <FriendsTitle>Invitations</FriendsTitle>
      {/* <FriendsList data='Pending Invitations' /> */}
    </MainContainer>
  );
};

export default FriendsSideBar;
