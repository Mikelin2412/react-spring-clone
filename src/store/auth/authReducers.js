const INITIAL_STATE = false;

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTHORIZE_USER':
      return action.payload;

    case 'UNAUTHORIZE_USER':
      return action.payload;
    
    default:
      return state;
  }
};

export default authReducer;
