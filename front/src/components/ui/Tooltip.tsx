import { Tooltip, TooltipProps } from "@mui/material";
import { cva, VariantProps } from "class-variance-authority";
import { ReactElement } from "react";

const tooltipVariants = cva("", {
  variants: {
    variant: {
      dark: "text-white",
      light: "text-primary",
    },
    size: {
      sm: "text-xs py-1 px-1.5",
      md: "text-sm py-1.5 px-3",
      lg: "text-lg py-2 px-4",
    },
  },
  defaultVariants: {
    variant: "light",
    size: "md",
  },
});

type TooltipVariants = VariantProps<typeof tooltipVariants>;

const popperStyleOptions = {
  dark: {
    backgroundColor: "#0D121C",
  },
  light: {
    backgroundColor: "#FFFFFF",
  },
};

type CustomTooltipProps = {
  children: ReactElement;
  placement: TooltipProps["placement"];
  title: TooltipProps["title"];
} & TooltipVariants;

const CustomTooltip = ({
  children,
  title,
  placement,
  variant = "light",
  size,
}: CustomTooltipProps) => {
  const tooltipVariant = variant ?? "light";
  return (
    <Tooltip
      title={
        <div className={tooltipVariants({ variant: tooltipVariant, size })}>
          {title}
        </div>
      }
      placement={placement}
      slotProps={{
        popper: {
          sx: {
            "& .MuiTooltip-tooltip": {
              boxShadow: "0px 2px 12px 0px rgba(9, 30, 66, 0.07)",
              ...popperStyleOptions[tooltipVariant],
            },
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
};

export { CustomTooltip as Tooltip };
