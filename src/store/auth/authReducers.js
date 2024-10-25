const INITIAL_STATE = {
  authData: {
    username: null,
    password: null,
  },
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTHORIZE_USER':
      return {
        ...state,
        authData: {
          ...state.authData,
          authData: action.payload,
        },
      };

    case 'UNAUTHORIZE_USER':
      return {
        ...state,
        authData: state.authData.filter((data) => data.id !== action.payload),
      };
    default:
      return state;
  }
};

export default authReducer;
