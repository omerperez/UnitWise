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
      true: "rounded-full hover:bg-slate-600 p-0.5",
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
} & IconButtonVariants;

export const IconButton = ({
  icon: Icon,
  onClick,
  variant,
  size,
  border,
}: IconButtonProps) => {
  const iconSize = iconSizeOptions[size ?? "md"];

  return (
    <div className={iconButtonVariants({ border })}>
      <Button
        onClick={onClick}
        variant={variant ?? "primary"}
        size={size ?? "md"}
        className={twJoin(
          "rounded-full flex items-center justify-center",
          iconButtonVariants({ size })
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
    </div>
  );
};
