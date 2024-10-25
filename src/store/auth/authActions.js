export const authorizeUser = (data) => ({
  type: 'AUTHORIZE_USER',
  payload: data,
});

export const unauthorizeUser = (data) => ({
  type: 'UNAUTHORIZE_USER',
  payload: data,
});
