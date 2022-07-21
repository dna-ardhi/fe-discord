import { chatActions } from '../actions/chatActions';

const initialState = {
  chatDetails: null,
  chatType: null,
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case chatActions.SET_CHAT_DETAILS:
      return {
        ...state,
        ...payload,
        messages: [],
      };
    case chatActions.SET_MESSAGES:
      return {
        ...state,
        messages: payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
