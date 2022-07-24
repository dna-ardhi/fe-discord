const initialState = {
  isInRoom: false,
  isRoomCreator: false,
  roomDetails: null,
  activeRoom: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
};

const roomReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default roomReducer;
