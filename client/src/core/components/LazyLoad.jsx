import React, { Suspense } from 'react';
import { Loader } from './Loader';
import ErrorBoundary from './ErrorBoundary';

export const LazyLoad = ({ children }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};