import { Logout, PersonOutlineOutlined } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { Fragment, MouseEvent, useState } from "react";
import { Tooltip } from "../../components/ui";
import { IconButton } from "../../components/ui/IconButton";

export const AccountActionButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Tooltip title="Omer Perez" placement="bottom">
        <IconButton
          onClick={handleClick}
          size="md"
          icon={PersonOutlineOutlined}
          variant="primary"
          border
          active={open}
        />
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            className: "mt-2 p-1",
            style: {
              borderRadius: 8,
              boxShadow: "0px 2px 12px 6px rgba(9, 30, 66, 0.07)",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          disabled
          className="gap-2 items-center !text-sm"
          onClick={handleClose}
        >
          <PersonOutlineOutlined sx={{ width: 18, height: 18 }} />
          <div>{`Profile (Coming soon)`}</div>
        </MenuItem>
        <MenuItem onClick={handleClose} className="gap-2 items-center !text-sm">
          <Logout sx={{ width: 18, height: 18 }} />
          <div>Log out</div>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
