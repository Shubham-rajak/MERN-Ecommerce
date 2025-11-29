import axios from 'axios';
import { envConfig } from './envConfig';
import { storage } from '@utils/storage';

const axiosClient = axios.create({
  baseURL: envConfig.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = storage.getItem(envConfig.JWT_KEY);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Handle different error status codes
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          storage.removeItem(envConfig.JWT_KEY);
          storage.removeItem(envConfig.USER_KEY);
          window.location.href = '/login';
          break;
        case 403:
          // Handle forbidden access
          break;
        case 404:
          // Handle not found
          break;
        default:
          // Handle other errors
          break;
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
