import { Avatar, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { Tabs, Tab, Box } from "@mui/material";
import classNames from "classnames";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const { userType } = useAuth();
  const router = useRouter();

  return (
    <Box
      className={styles.container}
      sx={{
        ...(userType !== "user" && { justifyContent: "flex-end" }),
        width: "85%",
      }}
    >
      {userType == "user" && (
        <Typography className={styles.logo} onClick={() => router.push("/")}>
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
          <TextField
            className={styles.inputField}
            placeholder="Search for..."
          />
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
          <Box className={styles.iconContainer}>
            <Image src="/assets/bell.svg" alt="bell" width={16} height={20} />
          </Box>
          <Box>
            <Avatar src="/assets/profile-picture-1.png" alt="profile" />
          </Box>
        </Box>
      )}
      {userType == "user" && (
        <Box className={styles.btnContainer}>
          <Button
            variant="outlined"
            className={classNames(styles.button, styles.outlined)}
          >
            Login
          </Button>
          <Button
            variant="contained"
            className={classNames(styles.button, styles.contained)}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </Box>
  );
}
