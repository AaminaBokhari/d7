import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

export const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
      <FaExclamationCircle className="flex-shrink-0" />
      <p>{message}</p>
    </div>
  );
};