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
    <Container maxWidth="lg" disableGutters sx={{ p: 0, m: 0 }}>
      <Box sx={{ display: "flex", minHeight: "100vh", width: "100%" }}>
        <Sidebar />
        <Box className={styles.mainContent}>
          <Header title="Recruiter Dashboard" />
          <Box className={styles.mainContent2}>
            <Typography variant="h5" className={styles.title}>
              Overview
            </Typography>

            <Box className={styles.cardsWrapper}>
              {jobStatistics.map((stat, idx) => (
                <StatCard
                  key={idx}
                  index={idx}
                  icon={stat.icon}
                  title={stat.title}
                  value={stat.value}
                  percentage={stat.percentage}
                />
              ))}
            </Box>

            {children}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
