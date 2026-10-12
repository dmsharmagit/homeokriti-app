import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  /** Stretch to full container width */
  fullWidth?: boolean;
  children?: ReactNode;
};

const baseClasses = cn(
  "inline-flex items-center justify-center gap-hk-1",
  "min-h-10 px-hk-2 py-hk-1",
  "rounded-hk-md",
  "text-hk-sm font-semibold leading-none",
  "cursor-pointer select-none",
  "transition-[background-color,box-shadow,transform,color]",
  "duration-[var(--hk-duration-fast)] ease-[var(--hk-easing-standard)]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
);

const variantClasses: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-primary text-text-inverse",
    "hover:bg-primary-600 hover:shadow-hk-sm",
    "active:bg-primary-700 active:shadow-none active:scale-[0.98]",
    "focus-visible:outline-primary",
  ),
  secondary: cn(
    "bg-secondary text-text-inverse",
    "hover:bg-secondary-600 hover:shadow-hk-sm",
    "active:bg-secondary-700 active:shadow-none active:scale-[0.98]",
    "focus-visible:outline-secondary",
  ),
};

export function Button({
  className,
  variant = "primary",
  fullWidth = false,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        variantClasses[variant],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
