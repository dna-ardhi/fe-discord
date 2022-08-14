import { io } from 'socket.io-client';
import { updateDirectChatHistoryIfActive } from '../helpers/chats';
import store from '../store';
import {
  setFriends,
  setOnlineUsers,
  setPendingFriendInvitation,
} from '../store/actions/friendsAction';
import * as roomHandler from './roomHandler';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  socket = io(process.env.REACT_APP_SOCKET_URL, {
    auth: {
      token: userDetails.token,
    },
  });

  socket.on('connect', () => {
    console.log(
      `Successfully connected to socket.io server with id ${socket.id}`
    );
  });

  socket.on('friend-invitation', (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendInvitation(pendingInvitations));
  });

  socket.on('friend-list', (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });

  socket.on('online-users', (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on('direct-chat-history', (data) => {
    updateDirectChatHistoryIfActive(data);
  });

  socket.on('room-create', (data) => {
    roomHandler.newRoomCreated(data);
  });

  socket.on('active-room', (data) => {
    roomHandler.updateActiveRoom(data);
  });
};

export const sendDirectMessage = (data) => {
  socket.emit('direct-message', data);
};

export const getDirectChatHistory = (data) => {
  socket.emit('direct-chat-history', data);
};

export const createNewRoom = () => {
  socket.emit('room-create');
};

export const joinRoom = (data) => {
  socket.emit('join-room', data);
};
