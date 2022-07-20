import { io } from 'socket.io-client';
import store from '../store';
import {
  setFriends,
  setOnlineUsers,
  setPendingFriendInvitation,
} from '../store/actions/friendsAction';

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
};
