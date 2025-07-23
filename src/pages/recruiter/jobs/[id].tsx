import RecruiterLayout from "@/layouts/RecruiterLayout/RecruiterLayout";
import { Box, Container, Typography } from "@mui/material";
import CandidateTable from "@/components/CandidateListTable/CandidateListTable";
import styles from "./style.module.css";

export default function JobDetailPage() {
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
          <CandidateTable />
        </Box>
      </Container>
    </RecruiterLayout>
  );
}
