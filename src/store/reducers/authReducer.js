const initialState = {
  userDetails: null,
};

const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default authReducer;
