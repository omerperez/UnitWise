import {
  ApartmentOutlined,
  HomeOutlined,
  PeopleOutline,
} from "@mui/icons-material";
import { Drawer, Toolbar } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { twJoin } from "tailwind-merge";
import { ROUTES } from "../../constants";
import { DRAWER_WIDTH, DRAWER_WIDTH_CLASSNAME } from "../constants";
import { CollapseButton } from "./CollapseButton";
import { SidebarButton } from "./SidebarButton";

export const SideBar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  const drawerStatusKey = open ? "open" : "closed";
  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{
        className: twJoin("shrink-0", DRAWER_WIDTH_CLASSNAME[drawerStatusKey]),
      }}
      className={twJoin("box-border", DRAWER_WIDTH_CLASSNAME[drawerStatusKey])}
      sx={{
        "& .MuiDrawer-paper": {
          boxShadow: "4px 0px 30px 0px rgba(18,33,58,0.10)",
          border: "none",
          transition: "width 0.3s",
          width: DRAWER_WIDTH[drawerStatusKey],
          overflowX: "hidden",
          "&:hover": {
            width: DRAWER_WIDTH.open,
          },
        },
      }}
    >
      <Toolbar variant="dense" />
      <div className="overflow-auto pt-2">
        <div className="flex flex-col gap-0.5">
          <SidebarButton
            label="Home"
            to={ROUTES.home}
            icon={HomeOutlined}
            isActive={pathname === ROUTES.home}
          />
          <SidebarButton
            label="Apartments"
            to={ROUTES.apartments}
            icon={ApartmentOutlined}
            isActive={pathname === ROUTES.apartments}
          />
          <SidebarButton
            label="Tenants"
            to={ROUTES.tenants}
            icon={PeopleOutline}
            isActive={pathname === ROUTES.tenants}
          />
          <div
            className={twJoin("absolute bottom-0", DRAWER_WIDTH_CLASSNAME.open)}
          >
            <CollapseButton
              open={open}
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </Drawer>
  );
};
