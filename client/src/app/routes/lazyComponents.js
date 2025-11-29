import { lazy } from 'react';

// Lazy loaded components
export const lazyComponents = {
  // Auth Pages
  Login: lazy(() => import('@features/auth/components/LoginForm')),
  Register: lazy(() => import('@features/auth/components/RegisterForm')),
  ForgotPassword: lazy(() => import('@features/auth/components/ForgotPasswordForm')),
  
  // User Pages
  Profile: lazy(() => import('@pages/user-pages/Profile')),
  Orders: lazy(() => import('@pages/user-pages/Orders')),
  Wishlist: lazy(() => import('@pages/user-pages/Wishlist')),
  
  // Product Pages
  ProductList: lazy(() => import('@pages/product-pages/ProductList')),
  ProductDetails: lazy(() => import('@pages/product-pages/ProductDetails')),
  CategoryProducts: lazy(() => import('@pages/product-pages/CategoryProducts')),
  
  // Cart Pages
  Cart: lazy(() => import('@pages/cart-pages/Cart')),
  Checkout: lazy(() => import('@pages/cart-pages/Checkout')),
  
  // Admin Pages
  Dashboard: lazy(() => import('@pages/admin-pages/Dashboard')),
  ProductManagement: lazy(() => import('@pages/admin-pages/ProductManagement')),
  OrderManagement: lazy(() => import('@pages/admin-pages/OrderManagement')),
  UserManagement: lazy(() => import('@pages/admin-pages/UserManagement')),
};