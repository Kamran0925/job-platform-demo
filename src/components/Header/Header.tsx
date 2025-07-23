import { Avatar, Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <Box className={styles.container}>
      <Box className={styles.subContainer}>
        <TextField className={styles.inputField} placeholder="Search for..." />
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
    </Box>
  );
}
