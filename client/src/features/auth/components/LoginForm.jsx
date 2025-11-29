import React from 'react';
import { useFormWithValidation } from '@hooks/useForm';
import { schemas } from '@utils/validators';
import { FormInput, FormCheckbox } from '@components/Form';
import { Icon, icons } from '@components/Icon';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormWithValidation(schemas.login, {
    email: '',
    password: '',
    rememberMe: false,
  });

  const onSubmit = async (data) => {
    try {
      console.log('Form submitted:', data);
      // Add your login logic here
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              name="email"
              control={control}
              label="Email address"
              type="email"
              error={errors.email?.message}
              placeholder="Enter your email"
              autoComplete="email"
            />

            <FormInput
              name="password"
              control={control}
              label="Password"
              type="password"
              error={errors.password?.message}
              placeholder="Enter your password"
              autoComplete="current-password"
            />

            <div className="flex items-center justify-between">
              <FormCheckbox
                name="rememberMe"
                control={control}
                label="Remember me"
              />

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Icon name={icons.user} size={20} />
                <span>Sign in</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};