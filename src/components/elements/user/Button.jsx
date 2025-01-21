import React from 'react';

export const Button = ({
  as: As = 'button',
  children = '',
  hierarchy = 'loud',
  className = '',
  size = 'md',
  ...props
}) => {

  const variant = {
    loud:  "bg-meli-blue-primary-500 text-white hover:bg-[#2868c7]",
    quiet: "bg-meli-blue-secondary-500/50 text-meli-blue-primary-500",
    transparent: "hover:bg-meli-blue-secondary-500/40 text-meli-blue-primary-500"
  };

  return (
    <As
      className={`rounded-lg px-6 py-3 text-center transition-colors ease-in-out
        ${variant[hierarchy]}
        ${className}`}
      {...props}
    >
      {children}
    </As>
  );
};
