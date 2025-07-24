import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import styles from "./UserLayout.module.css";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box
        sx={{
          padding: {
            xs: "20px 40px",
            md: "92px 80px",
          },
        }}
        className={styles.container}
      >
        {children}
      </Box>
    </>
  );
};

export default UserLayout;
