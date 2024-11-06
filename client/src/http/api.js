import axios from 'axios';

export const API_URL = 'http://localhost:3000/api';

const axiosApi = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

axiosApi.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token', response.data.accessToken);
      return axiosApi.request(originalRequest);
    }
    throw error;
  },
);

export const getProjectsBySearch = (search) =>
  axiosApi.get(`/getProjects`, {
    params: { search },
  });

export const login = (username, password) =>
  axiosApi.post('/login', {
    username,
    password,
  });

export const signUp = (
  username,
  password,
  repeatPassword,
  firstName,
  lastName,
  age,
) =>
  axiosApi.post('/signUp', {
    username,
    password,
    repeatPassword,
    firstName,
    lastName,
    age,
  });
