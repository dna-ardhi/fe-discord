import { apiSendFriendInvitations } from '../../api';
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
  };
};

export const setPendingFriendInvitation = (pendingInvitation) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    payload: pendingInvitation,
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await apiSendFriendInvitations(data);

    if (response.error) {
      dispatch(notify(response.exception?.response?.data));
    } else {
      dispatch(notify('Invitation has been sent!'));
      closeDialogHandler();
    }
  };
};
