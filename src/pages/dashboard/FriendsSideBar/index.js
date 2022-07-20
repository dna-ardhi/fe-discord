import { styled } from '@mui/system';
import React from 'react';
import AddFriendButton from './AddFriendButton';
import FriendsList from './FriendsList';
import FriendsTitle from './FriendsTitle';
import { connect } from 'react-redux';

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

const FriendsSideBar = ({ pendingFriendsInvitations }) => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle>Private Message</FriendsTitle>
      <FriendsList data={DUMMY_FRIENDS} />
      <FriendsTitle>Invitations</FriendsTitle>
      <FriendsList data={pendingFriendsInvitations} type='invitations' />
    </MainContainer>
  );
};

const mapStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStateToProps)(FriendsSideBar);
