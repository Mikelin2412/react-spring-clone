const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTHORIZE_USER':
      localStorage.setItem('token', action.payload.accessToken);
      return { ...action.payload.user, isAuth: action.payload.isAuth };

    case 'USER_REGISTRATION':
      localStorage.setItem('token', action.payload.accessToken);
      return { ...action.payload.user, isAuth: action.payload.isAuth };

    case 'CHECK_USER_AUTHORIZATION':
      localStorage.setItem('token', action.payload.accessToken);
      return { ...action.payload.user, isAuth: action.payload.isAuth };

    case 'SET_ERROR_MESSAGE':
      return { errorMessage: action.payload.errorMessage };

    default:
      return state;
  }
};

export default authReducer;
