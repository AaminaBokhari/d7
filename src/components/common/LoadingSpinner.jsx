import React from 'react';
import { FaSpinner } from 'react-icons/fa';

export const LoadingSpinner = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <div className="flex justify-center items-center">
      <FaSpinner 
        className={`animate-spin ${sizeClasses[size]} text-blue-500`}
        aria-label="Loading"
      />
    </div>
  );
};