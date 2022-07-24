import store from '../store';
import { setMessages } from '../store/actions/chatActions';

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  // find id of user from token and id of active conversation
  const receiverId = store.getState().chat.chatDetails?.id;
  const userId = store.getState().auth.userDetails._id;

  if (receiverId && userId) {
    const userInConversation = [receiverId, userId];
    updateChatHistoryIfSameConversationActive({
      participants,
      userInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameConversationActive = ({
  participants,
  userInConversation,
  messages,
}) => {
  const result = participants.every((participantId) =>
    userInConversation.includes(participantId)
  );

  if (result) {
    store.dispatch(setMessages(messages));
  }
};
