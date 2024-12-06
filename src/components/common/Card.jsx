import React from 'react';

export const Card = ({ 
  children, 
  title, 
  className = '',
  headerAction
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg ${className}`}>
      {title && (
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          {headerAction}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};