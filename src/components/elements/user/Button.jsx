import React from 'react';

export const Button = ({
  as: As = 'button',
  children = '',
  hierarchy = 'normal',
  className = '',
  color = "blue",
  size = "lg",
  ...props
}) => {

  const sizes = {
    sm: "text-xs px-3 p-2",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  }

  const variant = {
    blue: {
      normal: "bg-meli-blue-500 hover:bg-meli-blue-600 text-white ",
      quiet: "bg-meli-blue-200 hover:bg-meli-blue-300 text-meli-blue-500",
      transparent: "hover:bg-meli-blue-100 text-meli-blue-500"
    },
    green: {
      normal: "bg-brand-green-500 hover:bg-brand-green-600 text-white",
      quiet: "bg-brand-green-200 hover:bg-brand-green-300 text-brand-green-500",
      transparent: "hover:bg-brand-green-100 text-brand-green-500"
    },
    red: {
      normal: "bg-brand-red-500 hover:bg-brand-red-600 text-white",
      quiet: "bg-brand-red-200 hover:bg-brand-red-300 text-brand-red-500",
      transparent: "hover:bg-brand-red-100 text-brand-red-500"
    },
  };

  return (
    <As
      className={`rounded-md text-center transition-colors ease-in-out
        ${variant[color][hierarchy]}
        ${sizes[size]}
        ${className}`}
      {...props}
    >
      {children}
    </As>
  );
};
