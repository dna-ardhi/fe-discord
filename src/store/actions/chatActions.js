export const chatTypes = {
  DIRECT: 'DIRECT',
  GROUP: 'GROUP',
};

export const chatActions = {
  SET_CHAT_DETAILS: 'CHAT.SET_CHAT_DETAILS',
  SET_MESSAGES: 'CHAT.SET_MESSAGES',
  SET_CHAT_TYPE: 'CHAT.SET_CHAT_TYPE',
};

export const getActions = (dispatch) => {
  return {
    setChatDetails: (details, chatType) =>
      dispatch(setChosenChatDetails(details, chatType)),
  };
};

const setChosenChatDetails = (chatDetails, chatType) => {
  return {
    type: chatActions.SET_CHAT_DETAILS,
    payload: { chatType, chatDetails },
  };
};

export const setMessages = (messages) => {
  return {
    type: chatActions.SET_MESSAGES,
    payload: messages,
  };
};
