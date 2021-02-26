import axios from 'axios';

export default class Api {
  constructor() {
    this.axiosFunction = axios.create({
      baseURL: `http://127.0.0.1:8000/api`,
    });
  }

  setToken = () => {
    const token = localStorage.getItem('token');
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
