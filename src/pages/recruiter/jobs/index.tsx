import RecruiterLayout from "@/layouts/RecruiterLayout/RecruiterLayout";
import { Box, Container, Paper, Typography } from "@mui/material";
import JobListTable from "../../../components/JobListTable/JobListTable";
import { useApply } from "@/context/ApplyContext";
import styles from "./style.module.css";

export default function RecruiterJobsPage() {
  return (
    <RecruiterLayout>
      <Container
        sx={{ pl: 0, ml: 0 }}
        maxWidth="lg"
        disableGutters
        className={styles.container}
      >
        <Box sx={{ pl: 0, ml: 0 }}>
          <Typography className={styles.listingsTitle}>Job Listings</Typography>
          <JobListTable />
        </Box>
      </Container>
    </RecruiterLayout>
  );
}
