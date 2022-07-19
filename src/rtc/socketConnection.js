import { io } from 'socket.io-client';

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
};
