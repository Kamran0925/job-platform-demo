import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./DropDown.module.css";

export default function Dropdown({ label = "Dropdown" }: { label?: string }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        className={styles.dropdown}
        onClick={() => null}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          color: "#4B5563",
          minWidth: "131px",
          border: "1px solid #E5E7EB",
        }}
      >
        {label}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}
