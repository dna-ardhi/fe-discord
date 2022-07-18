import { styled } from '@mui/system';
import React from 'react';
import AppBar from './AppBar';
import Messenger from './Messenger';
import FriendsSideBar from './sidebar/FriendsSideBar';
import SideBar from './sidebar/SideBar';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const Dashboard = () => {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
