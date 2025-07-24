"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { Tabs, Tab, Box } from "@mui/material";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import ProfileDropdown from "../ProfileDropDown/ProfileDropDown";
import SearchInput from "../SearchFor/SearchFor";
import styles from "./Header.module.css";
import useAuth from "@/context/AuthContext";

export default function Header() {
  const { userType, logout } = useAuth();
  const router = useRouter();

  const handleLogoClick = () => {
    logout();
    router.push("/");
  };

  return (
    <Box
      className={styles.container}
      sx={{
        ...(userType !== "user" && { justifyContent: "flex-end" }),
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {userType == "user" && (
        <Typography className={styles.logo} onClick={handleLogoClick}>
          Logo
        </Typography>
      )}
      {userType == "user" && (
        <Box>
          <Tabs value={"Home"} aria-label="job tabs">
            <Tab
              label="Home"
              sx={{ color: "#3F83F8", borderBottom: "1px solid #3F83F8" }}
            />
            <Tab label="Jobs" />
            <Tab label="Extra Jobs" />
            <Tab label="Get Career Help" />
          </Tabs>
        </Box>
      )}
      {userType !== "user" && (
        <Box className={styles.subContainer}>
          <SearchInput />
          <Button className={styles.btn}>
            <Image src="/assets/plus.svg" alt="plus" width={16} height={16} />
            New Job
          </Button>{" "}
          <Box className={styles.iconContainer}>
            <Image
              src="/assets/settings.svg"
              alt="settings"
              width={18}
              height={18}
            />
          </Box>
          <Box className={styles.iconContainer} onClick={handleLogoClick}>
            <Image src="/assets/bell.svg" alt="bell" width={16} height={20} />
          </Box>
          <Box>
            <ProfileDropdown />
          </Box>
        </Box>
      )}
      {userType == "user" && (
        <Box className={styles.btnContainer}>
          <Button
            variant="outlined"
            onClick={handleLogoClick}
            className={classNames(styles.button, styles.outlined)}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={handleLogoClick}
            className={classNames(styles.button, styles.contained)}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </Box>
  );
}
