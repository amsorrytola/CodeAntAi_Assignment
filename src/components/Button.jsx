import React from 'react';

function Button({
  children,
  type = "button",
  bgColor,
  textColor,
  className,
  ...props
}) {
  return (
    <button
      type={type}
      className={`${bgColor} ${textColor} ${className} px-4 py-2 rounded-md font-medium`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
