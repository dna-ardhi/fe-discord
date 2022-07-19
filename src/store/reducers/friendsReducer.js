import { friendsActions } from '../actions/friendsAction';

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const friendsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case friendsActions.SET_PENDING_FRIENDS_INVITATIONS:
      return {
        ...state,
        pendingFriendsInvitations: payload,
      };
    case friendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: payload,
      };
    case friendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: payload,
      };
    default:
      return state;
  }
};

export default friendsReducer;
