import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "block w-full text-center rounded-full px-6 py-3 text-base font-medium bg-primary text-white hover:bg-primary/90 transition-colors mt-3 mb-3",
    secondary:
      "block w-full text-center rounded-full px-6 py-3 text-base font-medium bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors mt-3 mb-3",
    tertiary:
      "bg-transparent text-blue-600 hover:underline px-0 py-0 rounded-none",
  };

  return (
    <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center font-medium transition-colors focus:outline-none px-4 py-1.5 rounded-lg text-sm",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
