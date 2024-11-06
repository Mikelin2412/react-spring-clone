import { getProjectsBySearch } from '../../http/api';

const setProjectsBySearch = (projects) => ({
  type: 'SET_PROJECTS',
  payload: projects,
});

export const getProjects = (search) => {
  return async (dispatch) => {
    await getProjectsBySearch(search)
      .then((res) => {
        dispatch(setProjectsBySearch(res.data));
      })
      .catch((err) => {
        dispatch(errorMessage(err.response.data));
      });
  };
};
