import React from 'react';
import { Controller } from 'react-hook-form';

// Form Input component with error handling
export const FormInput = ({ name, control, label, type = 'text', error, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            {...props}
            type={type}
            id={name}
            className={`block w-full rounded-md border ${
              error ? 'border-red-500' : 'border-gray-300'
            } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              error ? 'focus:border-red-500' : 'focus:border-blue-500'
            }`}
          />
        )}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Form Select component
export const FormSelect = ({ name, control, label, options, error, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            {...field}
            {...props}
            id={name}
            className={`block w-full rounded-md border ${
              error ? 'border-red-500' : 'border-gray-300'
            } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              error ? 'focus:border-red-500' : 'focus:border-blue-500'
            }`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Form Checkbox component
export const FormCheckbox = ({ name, control, label, error, ...props }) => {
  return (
    <div className="flex items-center space-x-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            {...props}
            type="checkbox"
            id={name}
            checked={field.value}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        )}
      />
      {label && (
        <label htmlFor={name} className="text-sm text-gray-700">
          {label}
        </label>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Form Textarea component
export const FormTextarea = ({ name, control, label, error, ...props }) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            {...props}
            id={name}
            className={`block w-full rounded-md border ${
              error ? 'border-red-500' : 'border-gray-300'
            } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              error ? 'focus:border-red-500' : 'focus:border-blue-500'
            }`}
          />
        )}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};