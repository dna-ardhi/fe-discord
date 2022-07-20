import * as api from '../../api';
import { notify } from './alertActions';

export const friendsActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitations: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    accept: (data) => dispatch(acceptFriendInvitation(data)),
    reject: (data) => dispatch(rejectFriendInvitation(data)),
  };
};

export const setPendingFriendInvitation = (pendingInvitation) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    payload: pendingInvitation,
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    payload: friends,
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => async (dispatch) => {
  const response = await api.sendFriendInvitations(data);

  if (response.error) {
    dispatch(notify(response.exception?.response?.data));
  } else {
    dispatch(notify('Invitation has been sent!'));
    closeDialogHandler();
  }
};

const acceptFriendInvitation = (data) => async (dispatch) => {
  const response = await api.acceptFriendInvitation(data);
  if (response.error) {
    dispatch(notify(response.exception?.response?.data));
  } else {
    dispatch(notify('Invitation accepted!'));
  }
};

const rejectFriendInvitation = (data) => async (dispatch) => {
  const response = await api.rejectFriendInvitation(data);
  if (response.error) {
    dispatch(notify(response.exception?.response?.data));
  } else {
    dispatch(notify('Invitation rejected!'));
  }
};
