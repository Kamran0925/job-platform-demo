import { Box, Container, Typography } from "@mui/material";
import Sidebar from "../../components/SideBar/SideBar";
import Header from "@/components/Header/Header";
import StatCard from "@/components/StatCard/StatCard";
import { jobStatistics } from "@/utils/data";
import styles from "./RecruiterLayout.module.css";

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ p: 0, m: 0, overflowX: "hidden", width: "100vw" }}
    >
      <Box sx={{ display: "flex", width: "100%", overflowX: "hidden" }}>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "223px",
            flexShrink: 0,
          }}
        >
          <Sidebar />
        </Box>

        <Box className={styles.mainContent}>
          <Header />
          <Box className={styles.mainContent2}>
            <Typography variant="h5" className={styles.title}>
              Overview
            </Typography>
            <Box className={styles.cardsWrapper}>
              {jobStatistics.map((stat, idx) => (
                <StatCard key={idx} {...stat} index={idx} />
              ))}
            </Box>
            {children}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
