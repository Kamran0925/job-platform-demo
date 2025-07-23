import RecruiterLayout from "@/layouts/RecruiterLayout/RecruiterLayout";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import CandidateTable from "@/components/CandidateListTable/CandidateListTable";
import { useApply } from "@/context/ApplyContext";
import SearchSortRow from "@/components/SearchSortRow/SearchSortRow";
import { ArrowBack } from "@mui/icons-material";
import styles from "./style.module.css";

export default function JobDetailPage() {
  const { hasApplied } = useApply();

  return (
    <RecruiterLayout>
      <Container
        sx={{ pl: 0, ml: 0 }}
        maxWidth="lg"
        disableGutters
        className={styles.container}
      >
        {hasApplied && (
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography fontWeight="bold">
              A user has applied to this job
            </Typography>
          </Paper>
        )}
        <Stack className={styles.header}>
          <Link href="/recruiter/jobs" passHref>
            <Button className={styles.backBtn}>
              <ArrowBack fontSize="small" />
              <Typography variant="body2" color="primary">
                Back
              </Typography>
            </Button>
          </Link>
        </Stack>
        <Box sx={{ pl: 0, ml: 0 }}>
          <Typography className={styles.listingsTitle}>Job Listings</Typography>
          <SearchSortRow />
          <CandidateTable />
        </Box>
      </Container>
    </RecruiterLayout>
  );
}
