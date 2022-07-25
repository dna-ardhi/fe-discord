import { styled } from '@mui/system';
import React from 'react';
import AppBar from './AppBar';
import Messenger from './Messenger';
import FriendsSideBar from './FriendsSideBar';
import SideBar from './SideBar';
import { connect } from 'react-redux';
import Room from './Room';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const Dashboard = ({ isInRoom }) => {
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
      {isInRoom && <Room />}
    </Wrapper>
  );
};

const mapStateToProps = ({ room }) => ({
  ...room,
});

export default connect(mapStateToProps)(Dashboard);
