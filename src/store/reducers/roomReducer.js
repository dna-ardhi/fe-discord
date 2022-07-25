import { roomActions } from '../actions/roomActions';

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
  const { type, payload } = action;
  switch (type) {
    case roomActions.OPEN_ROOM:
      return {
        ...state,
        ...payload,
      };
    case roomActions.SET_ROOM_DETAILS:
      return {
        ...state,
        roomDetails: payload,
      };
    default:
      return state;
  }
};

export default roomReducer;
