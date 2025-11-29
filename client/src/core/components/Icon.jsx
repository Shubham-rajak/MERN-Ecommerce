import React from 'react';
import * as LucideIcons from 'lucide-react';

// Icon component that wraps Lucide icons with default styling
export const Icon = ({ name, size = 24, className = '', ...props }) => {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  return (
    <LucideIcon
      size={size}
      className={`inline-block ${className}`}
      {...props}
    />
  );
};

// Common icons object for easy access to frequently used icons
export const icons = {
  // Navigation
  menu: 'Menu',
  home: 'Home',
  search: 'Search',
  settings: 'Settings',
  
  // Actions
  add: 'Plus',
  edit: 'Edit',
  delete: 'Trash2',
  save: 'Save',
  
  // E-commerce
  cart: 'ShoppingCart',
  heart: 'Heart',
  user: 'User',
  filter: 'Filter',
  
  // Status
  success: 'CheckCircle',
  error: 'XCircle',
  warning: 'AlertTriangle',
  info: 'Info',
  
  // Navigation arrows
  arrowLeft: 'ArrowLeft',
  arrowRight: 'ArrowRight',
  chevronDown: 'ChevronDown',
  chevronUp: 'ChevronUp',
  
  // Social
  mail: 'Mail',
  phone: 'Phone',
  location: 'MapPin',
  
  // Others
  close: 'X',
  logout: 'LogOut',
  loading: 'Loader'
};