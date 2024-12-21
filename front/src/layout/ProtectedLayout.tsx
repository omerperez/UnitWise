import { CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar";
import { SideBar } from "./Sidebar";

export const ProtectedLayout = () => {
  return (
    <div className="flex">
      <CssBaseline />
      <AppBar />
      <SideBar />
      <main className="flex-grow p-2.5">
        <Toolbar variant="dense" />
        <Outlet />
      </main>
    </div>
  );
};
