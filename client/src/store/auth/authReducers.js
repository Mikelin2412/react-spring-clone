const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTHORIZE_USER':
      return { ...action.payload };

    case 'SET_ERROR_MESSAGE':
      return { message: action.payload.message };

    default:
      return state;
  }
};

export default authReducer;
