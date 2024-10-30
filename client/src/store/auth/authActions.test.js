import { authorizeUser, authUser } from './authActions';
import { thunk } from 'redux-thunk';
import configureStore from 'redux-mock-store';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

jest.mock('axios');

describe('user authorization', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterAll(() => {
    jest.unmock('axios');
  });

  test('when authorization is successful', async () => {
    const mockUserData = {
      data: { username: 'admin', password: '1234', isAuth: true },
    };

    axios.post.mockResolvedValue(mockUserData);

    await store.dispatch(authUser('admin', '1234'));
    const state = store.getActions();

    expect(state[0].payload.username).toEqual('admin');
    expect(state[0].payload.password).toEqual('1234');
    expect(state[0].payload.isAuth).toEqual(true);
  });

  test('when authorization is failed', async () => {
    const mockUserData = {
      data: { message: "You don't have access!" },
    };

    axios.post.mockResolvedValue(mockUserData);

    await store.dispatch(authUser('Misha', '4321'));
    const state = store.getActions();

    expect(state[0].payload.message).toEqual("You don't have access!");
  });
});
