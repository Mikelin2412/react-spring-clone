import axios from 'axios';
import { API_URL, login, signUp } from '../../http/api';

const errorMessage = (message) => ({
  type: 'SET_ERROR_MESSAGE',
  payload: message,
});

export const authUser = (username, password) => {
  return async (dispatch) => {
    await login(username, password)
      .then((res) => dispatch(authorizeUser(res.data)))
      .catch((err) => {
        dispatch(errorMessage(err.response.data));
      });
  };
};

export const signUpUser = (
  username,
  password,
  repeatPassword,
  firstName,
  lastName,
  age,
) => {
  return async (dispatch) => {
    await signUp(username, password, repeatPassword, firstName, lastName, age)
      .then((res) => dispatch(userRegistration(res.data)))
      .catch((err) => {
        dispatch(errorMessage(err.response.data));
      });
  };
};

export const checkAuth = () => {
  return async (dispatch) => {
    await axios
      .get(`${API_URL}/refresh`, { withCredentials: true })
      .then((res) => dispatch(checkUserAuthorization(res.data)))
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const authorizeUser = (data) => ({
  type: 'AUTHORIZE_USER',
  payload: data,
});

export const userRegistration = (data) => ({
  type: 'USER_REGISTRATION',
  payload: data,
});

export const checkUserAuthorization = (data) => ({
  type: 'CHECK_USER_AUTHORIZATION',
  payload: data,
});
