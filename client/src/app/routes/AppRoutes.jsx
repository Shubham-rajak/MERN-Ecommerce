import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LazyLoad } from '@components/LazyLoad';
import { lazyComponents } from './lazyComponents';
// import MainLayout from '@core/layouts/MainLayout';
// import AdminLayout from '@core/layouts/AdminLayout';
import PrivateRoute from './PrivateRoute';
import RoleBasedRoute from './RoleBasedRoute';

const AppRoutes = () => {
  const {
    // Auth Components
    Login,
    Register,
    ForgotPassword,
    
    // User Components
    Profile,
    Orders,
    Wishlist,
    
    // Product Components
    ProductList,
    ProductDetails,
    CategoryProducts,
    
    // Cart Components
    Cart,
    Checkout,
    
    // Admin Components
    Dashboard,
    ProductManagement,
    OrderManagement,
    UserManagement,
  } = lazyComponents;

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={
          <LazyLoad>
            <ProductList />
          </LazyLoad>
        } />
        <Route path="login" element={
          <LazyLoad>
            <Login />
          </LazyLoad>
        } />
        <Route path="register" element={
          <LazyLoad>
            <Register />
          </LazyLoad>
        } />
        <Route path="forgot-password" element={
          <LazyLoad>
            <ForgotPassword />
          </LazyLoad>
        } />
        <Route path="products">
          <Route index element={
            <LazyLoad>
              <ProductList />
            </LazyLoad>
          } />
          <Route path=":id" element={
            <LazyLoad>
              <ProductDetails />
            </LazyLoad>
          } />
          <Route path="category/:category" element={
            <LazyLoad>
              <CategoryProducts />
            </LazyLoad>
          } />
        </Route>
      </Route>

      {/* Protected User Routes */}
      <Route path="/user" element={<PrivateRoute><MainLayout /></PrivateRoute>}>
        <Route path="profile" element={
          <LazyLoad>
            <Profile />
          </LazyLoad>
        } />
        <Route path="orders" element={
          <LazyLoad>
            <Orders />
          </LazyLoad>
        } />
        <Route path="wishlist" element={
          <LazyLoad>
            <Wishlist />
          </LazyLoad>
        } />
        <Route path="cart" element={
          <LazyLoad>
            <Cart />
          </LazyLoad>
        } />
        <Route path="checkout" element={
          <LazyLoad>
            <Checkout />
          </LazyLoad>
        } />
      </Route>

      {/* Admin Routes */}
      <Route 
        path="/admin" 
        element={
          <RoleBasedRoute roles={['admin']}>
            <AdminLayout />
          </RoleBasedRoute>
        }
      >
        <Route index element={
          <LazyLoad>
            <Dashboard />
          </LazyLoad>
        } />
        <Route path="products" element={
          <LazyLoad>
            <ProductManagement />
          </LazyLoad>
        } />
        <Route path="orders" element={
          <LazyLoad>
            <OrderManagement />
          </LazyLoad>
        } />
        <Route path="users" element={
          <LazyLoad>
            <UserManagement />
          </LazyLoad>
        } />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
