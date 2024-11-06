const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTHORIZE_USER':
      if (action.payload.errors) {
        const errorsObject = {};
        action.payload.errors.forEach((error) => {
          if (!errorsObject[error.path])
            return (errorsObject[error.path] = [error.msg]);

          errorsObject[error.path].push(error.msg);
        });
        return { validationErrors: errorsObject };
      }
      localStorage.setItem('token', action.payload.accessToken);
      return { ...action.payload.user, isAuth: action.payload.isAuth };

    case 'USER_REGISTRATION':
      if (action.payload.errors) {
        const errorsObject = {};
        action.payload.errors.forEach((error) => {
          if (!errorsObject[error.path])
            return (errorsObject[error.path] = [error.msg]);

          errorsObject[error.path].push(error.msg);
        });
        return { validationErrors: errorsObject };
      }
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
