import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import styles from "./UserLayout.module.css";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header title={"Logo"} />
      <Box className={styles.container}>{children}</Box>
    </>
  );
};

export default UserLayout;
