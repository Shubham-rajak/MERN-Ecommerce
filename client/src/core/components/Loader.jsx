import React from 'react';

export const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <div className="relative inline-flex">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full absolute left-0 animate-ping"></div>
        <div className="w-8 h-8 bg-blue-500 rounded-full absolute left-0 animate-pulse"></div>
      </div>
    </div>
  );
};

// Smaller version for inline loading
export const SpinnerLoader = () => {
  return (
    <div className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent"></div>
  );
};
