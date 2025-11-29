import { z } from 'zod';

// Common validation patterns
const patterns = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
};

// Common validation messages
export const messages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  password: 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
  phone: 'Please enter a valid phone number',
  min: (field, length) => `${field} must be at least ${length} characters`,
  max: (field, length) => `${field} must not exceed ${length} characters`,
};

// Common validation schemas
export const schemas = {
  // Login form schema
  login: z.object({
    email: z.string().email(messages.email),
    password: z.string().min(1, messages.required),
    rememberMe: z.boolean().optional(),
  }),

  // Registration form schema
  register: z.object({
    name: z.string().min(2, messages.min('Name', 2)),
    email: z.string().email(messages.email),
    password: z.string().regex(patterns.password, messages.password),
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),

  // Profile update schema
  profile: z.object({
    name: z.string().min(2, messages.min('Name', 2)),
    email: z.string().email(messages.email),
    phone: z.string().regex(patterns.phone, messages.phone).optional(),
    address: z.string().min(10, messages.min('Address', 10)).optional(),
  }),

  // Product schema
  product: z.object({
    name: z.string().min(3, messages.min('Product name', 3)),
    description: z.string().min(10, messages.min('Description', 10)),
    price: z.number().positive('Price must be positive'),
    category: z.string().min(1, messages.required),
    stock: z.number().int().positive('Stock must be positive'),
  }),
};
