const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTHORIZE_USER':
      return { ...state, ...action.payload };
    
    case 'SET_ERROR_MESSAGE':
      return { ...state, message: action.payload.message };
    
    default:
      return state;
  }
};

export default authReducer;
