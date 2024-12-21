import { AppBar as MuiAppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import logoURL from "../../assets/white-logo.png";
import { AccountActionButton } from "./AccountActionButton";

export const AppBar = () => {
  return (
    <MuiAppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: "none",
      }}
    >
      <Toolbar
        className="bg-[#1A1A1E] h-12"
        sx={{
          "@media (min-width: 0px)": { padding: "0 8px" },
        }}
        variant="dense"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
            <Link
              className="flex h-full w-12 shrink-0 justify-center"
              to="/home"
            >
              <img src={logoURL} alt="logo" className="w-12" />
            </Link>
            <b style={{ letterSpacing: 1 }}>Home</b>
          </div>
          <AccountActionButton />
        </div>
      </Toolbar>
    </MuiAppBar>
  );
};
