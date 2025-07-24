import { Avatar, Menu, IconButton, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import useAuth from "@/context/AuthContext";
import { useRouter } from "next/router";

const ProfileDropdown = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogoClick = () => {
    logout();
    router.push("/");
  };

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <IconButton onClick={handleLogoClick}>
        <Avatar src="/assets/profile-picture-1.png" alt="profile" />
      </IconButton>
      <ArrowDropDownIcon sx={{ color: "#6B7280" }} />
      <Menu open={false} />
    </Box>
  );
};

export default ProfileDropdown;
