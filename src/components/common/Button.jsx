import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const baseClasses = 'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2';
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-200',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${className}
      `}
    >
      {children}
    </button>
  );
};