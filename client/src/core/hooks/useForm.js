import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const useFormWithValidation = (schema, defaultValues = {}) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onBlur',
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
    control,
  } = form;

  return {
    ...form,
    errors,
    isSubmitting,
    reset,
    watch,
    setValue,
    control,
  };
};