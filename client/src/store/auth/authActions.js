import axios from 'axios';

const errorMessage = (message) => ({
  type: 'SET_ERROR_MESSAGE',
  payload: message,
})

export const authUser = (username, password) => {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:3000/login`, {
        username,
        password,
      })
      .then((res) => {
        dispatch(authorizeUser(res.data));
      })
      .catch((err) => {
        dispatch(errorMessage(err.response.data))
      });
  };
};

export const authorizeUser = (data) => ({
  type: 'AUTHORIZE_USER',
  payload: data,
});
