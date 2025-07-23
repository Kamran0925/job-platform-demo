import { Avatar, Menu, IconButton, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <IconButton onClick={handleClick}>
        <Avatar src="/assets/profile-picture-1.png" alt="profile" />
      </IconButton>
      <ArrowDropDownIcon sx={{ color: "#6B7280" }} />
      <Menu
        anchorEl={anchorEl}
        open={false}
        onClose={() => setAnchorEl(null)}
      />
    </Box>
  );
};

export default ProfileDropdown;
