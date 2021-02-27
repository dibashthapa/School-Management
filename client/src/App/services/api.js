import axios from 'axios';
import Cookies from 'js-cookie';
export default class Api {
  constructor() {
    this.axiosFunction = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
  }

  setToken = () => {
    const token = Cookies.get('token');
    this.axiosFunction.interceptors.request.use(
      (config) => {
        config.headers['Authorization'] = 'Bearer ' + token;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };

  get = (url, data) => {
    return this.axiosFunction
      .get(url, { params: data })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  post = (url, data, headers = null) => {
    if (headers) {
      for (const header in headers) {
        if (headers[header]) {
          this.axiosFunction.defaults.headers[header] = headers[header];
        }
      }
    }
    return this.axiosFunction
      .post(url, data)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  put = (url, data) => {
    return this.axiosFunction
      .put(url, data)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  delete = (url) => {
    return this.axiosFunction
      .delete(url)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };
}
