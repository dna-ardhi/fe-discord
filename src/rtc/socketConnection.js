import { io } from 'socket.io-client';
import store from '../store';
import {
  setFriends,
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
      `Successfully connected with socket.io server id => ${socket.id}`
    );
  });

  socket.on('friend-invitation', (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendInvitation(pendingInvitations));
  });

  socket.on('friend-list', (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
    console.log('friends list :', friends);
  });
};
