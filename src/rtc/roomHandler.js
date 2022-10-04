import store from '../store';
import {
  setActiveRooms,
  setOpenRoom,
  setRoomDetails,
} from '../store/actions/roomActions';
import * as socketConnection from './socketConnection';

const { dispatch, getState } = store;

export const createNewRoom = () => {
  dispatch(setOpenRoom(true, true));
  socketConnection.createNewRoom();
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRoom = (data) => {
  const { activeRooms } = data;
  const friends = getState().friends.friends;
  const rooms = [];

  activeRooms.forEach((room) => {
    friends.forEach((friend) => {
      if (friend.id === room.roomCreator.userId) {
        rooms.push({ ...room, creatorUserName: friend.username });
      }
    });
  });

  dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  dispatch(setRoomDetails({ roomId }));
  dispatch(setOpenRoom(false, true));
  socketConnection.joinRoom({ roomId });
};
