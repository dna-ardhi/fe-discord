import { styled } from '@mui/system';
import React from 'react';

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2f3136',
});

const FriendsSideBar = () => {
  return <MainContainer>FriendsSideBar</MainContainer>;
};

export default FriendsSideBar;
