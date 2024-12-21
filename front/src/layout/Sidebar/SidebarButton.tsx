import { Link } from "react-router-dom";
import { twJoin } from "tailwind-merge";
import { IconType } from "../../components/ui/types";

type SidebarButtonProps = {
  label: string;
  to: string;
  icon: IconType;
  isActive: boolean;
};
export const SidebarButton = ({
  label,
  to,
  icon: Icon,
  isActive,
}: SidebarButtonProps) => {
  return (
    <Link
      to={to}
      className={twJoin(
        "px-4 py-2 flex items-center gap-2 relative",
        isActive
          ? "bg-navigation-side-bg-selected"
          : "hover:bg-navigation-side-bg-hover"
      )}
    >
      <div
        className={twJoin(
          "absolute left-0 h-full w-[2px] bg-navigation-icon-active transition-[transform] delay-100 duration-300 ease-in-out",
          isActive ? "scale-y-100" : "scale-y-0"
        )}
      />
      <div
        className={
          isActive ? "text-navigation-icon-active" : "text-neutral-400"
        }
      >
        <Icon color="inherit" fontSize="small" />
      </div>
      <div
        className={twJoin(
          "truncate text-clip text-sm leading-6 group-hover/button:text-primary",
          isActive ? "text-primary" : "text-tertiary"
        )}
      >
        {label}
      </div>
    </Link>
  );
};
