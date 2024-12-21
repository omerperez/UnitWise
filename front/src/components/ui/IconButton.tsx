import { cva, VariantProps } from "class-variance-authority";
import { MouseEvent } from "react";
import { twJoin } from "tailwind-merge";
import { Button } from "./Button";
import { IconType } from "./types";
const iconButtonVariants = cva("", {
  variants: {
    variant: {
      primary: "text-white",
      secondary: "text-black",
      ghost: "text-primary",
    },
    size: {
      sm: "size-7",
      md: "size-8",
      lg: "size-10",
    },
    border: {
      true: "border-slate-600 hover:border-2",
      false: "",
    },
    active: {
      true: "border-slate-600 border-2",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type IconButtonVariants = VariantProps<typeof iconButtonVariants>;

const iconSizeOptions: Record<IconButtonVariants["size"], number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

type IconButtonProps = {
  icon: IconType;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  active?: boolean;
} & IconButtonVariants;

export const IconButton = ({
  icon: Icon,
  onClick,
  variant,
  size,
  border,
  active,
}: IconButtonProps) => {
  const iconSize = iconSizeOptions[size ?? "md"];

  return (
    <Button
      onClick={onClick}
      variant={variant ?? "primary"}
      size={size ?? "md"}
      className={twJoin(
        "rounded-full flex items-center justify-center",
        iconButtonVariants({ size, border, active }),
        variant === "primary"
          ? "bg-navigation-icon-active hover:bg-navigation-top-icon-active"
          : undefined
      )}
    >
      <Icon
        className={iconButtonVariants({ variant })}
        sx={{
          width: iconSize,
          height: iconSize,
        }}
      />
    </Button>
  );
};
