export const envConfig = {
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',
  JWT_KEY: 'auth-token',
  THEME_KEY: 'theme-mode',
  CART_KEY: 'cart-items',
  USER_KEY: 'user-info',
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    PROFILE: '/auth/profile',
  },
  PRODUCTS: {
    BASE: '/products',
    CATEGORIES: '/products/categories',
    SEARCH: '/products/search',
  },
  CART: {
    BASE: '/cart',
    ADD: '/cart/add',
    REMOVE: '/cart/remove',
    CLEAR: '/cart/clear',
  },
  ORDERS: {
    BASE: '/orders',
    CREATE: '/orders/create',
    HISTORY: '/orders/history',
  },
  USERS: {
    BASE: '/users',
    UPDATE: '/users/update',
  },
};
