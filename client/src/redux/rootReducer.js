import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@features/auth/authSlice';
import cartReducer from '@features/cart/cartSlice';
import productReducer from '@features/products/productSlice';
import orderReducer from '@features/orders/orderSlice';
import userReducer from '@features/users/userSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productReducer,
  orders: orderReducer,
  users: userReducer,
});

export default rootReducer;
