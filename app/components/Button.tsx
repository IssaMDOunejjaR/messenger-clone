"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  secondary?: boolean;
  danger?: boolean;
}

const Button: FC<ButtonProps> = ({
  fullWidth,
  children,
  secondary,
  danger,
  disabled,
  ...restOfProps
}) => {
  return (
    <button
      className={clsx(
        "flex justify-center px-3 rounded-md py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600"
      )}
      disabled={disabled}
      {...restOfProps}
    >
      {children}
    </button>
  );
};

export default Button;
