import { styled } from '@mui/system';
import React from 'react';
import CreateRoomButton from './CreateRoomButton';
import MainPageButton from './MainPageButton';
import { connect } from 'react-redux';
import ActiveRoomButton from './ActiveRoomButton';

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225',
});

const SideBar = ({ activeRooms, isInRoom }) => {
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton />
      {activeRooms.map((room) => (
        <ActiveRoomButton
          key={room.roomId}
          roomId={room.roomId}
          creatorUserName={room.creatorUserName}
          amountOfParticipants={room.participants.length}
          isUserInRoom={isInRoom}
        />
      ))}
    </MainContainer>
  );
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStateToProps)(SideBar);
