import Api from '../services/api';

const auth = {
  signIn: async (credentials) => {
    const api = new Api(false);
    return await api.post('auth/login', credentials);
  },
  fetchLoggedInUser: async (token) => {
    const api = new Api(false);
    console.log(token);
    return await api.post('auth/me', { token });
  },
  signOut: () => {
    return true;
  },
};

export default auth;
