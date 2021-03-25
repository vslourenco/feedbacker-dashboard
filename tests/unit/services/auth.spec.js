import mockAxios from 'axios';
import AuthService from '../../../src/services/auth';

jest.mock('axios');

describe('AuthService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a token when user login', async () => {
    const token = '111.222.333.444';
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: { token } }));

    const response = await AuthService(mockAxios)
      .login({ email: 'mymail@email.com', password: '123456' });

    expect(response.data).toHaveProperty('token');
    expect(response).toMatchSnapshot();
  });

  it('should return an user when user register', async () => {
    const user = {
      name: 'Vinicius',
      password: '123456',
      email: 'vinicius@mail.com',
    };
    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: user }));

    const response = await AuthService(mockAxios)
      .register({ user });

    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('email');
    expect(response).toMatchSnapshot();
  });

  it('should return an error when there is not network', async () => {
    const errors = { status: 404, statusText: 'Not Found' };

    mockAxios.post.mockImplementationOnce(() => Promise.resolve({ request: errors }));

    const response = await AuthService(mockAxios)
      .login({ email: 'mymail@email.com', password: '123456' });

    expect(response.errors).toHaveProperty('status');
    expect(response.errors).toHaveProperty('statusText');
  });
});
