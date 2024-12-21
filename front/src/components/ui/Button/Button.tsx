import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
import { IconType } from "../types";
import { buttonVariantOptions } from "./variants";

type ButtonVariantType =
  | "primary"
  | "secondary"
  | "distractive"
  | "outline"
  | "ghost";

const sizeClassName = {
  sm: "text-caption h-7 gap-1 px-2 text-xs font-bold leading-4",
  md: "text-body-2-accented h-8 gap-2 px-3 text-sm font-bold leading-5",
  lg: "text-body-1-accented h-10 gap-2 px-4 text-base font-bold leading-6",
};

const iconClassName = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

const buttonVariants = cva(
  "flex select-none items-center justify-center whitespace-pre rounded transition-colors duration-300",
  {
    variants: {
      variant: buttonVariantOptions,
      size: sizeClassName,
      fullWidth: {
        true: "w-full",
        false: "",
      },
      iconSize: iconClassName,
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

type ButtonOptions = {
  size?: keyof typeof sizeClassName;
  variant?: ButtonVariantType;
  fullWidth?: boolean;
  endIcon?: IconType;
  startIcon?: IconType;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

type ButtonProps = ButtonOptions &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({
  children,
  size,
  variant,
  fullWidth,
  endIcon: EndIcon,
  startIcon: StartIcon,
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  const buttonClassName = buttonVariants({ size, variant, fullWidth });
  const iconSize = buttonVariants({ iconSize: size });
  return (
    <button
      onClick={onClick}
      {...rest}
      className={twMerge(buttonClassName, className)}
    >
      {StartIcon ? <StartIcon className={iconSize} color="inherit" /> : null}
      {children}
      {EndIcon ? <EndIcon className={iconSize} color="inherit" /> : null}
    </button>
  );
};
