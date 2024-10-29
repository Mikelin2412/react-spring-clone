import axios from 'axios';

const setProjectsBySearch = (projects) => ({
  type: 'SET_PROJECTS',
  payload: projects,
});

export const getProjects = (search) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/getProjects`, {
        params: { search },
      })
      .then((res) => {
        dispatch(setProjectsBySearch(res.data));
      })
      .catch((err) => {
        dispatch(errorMessage(err.response.data));
      });
  };
};