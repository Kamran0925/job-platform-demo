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
          <Paper
            sx={{
              p: 2,
              mb: 2,
              boxShadow: "none",
              background: "#1A56DB",
              color: "#FFF",
            }}
          >
            <Typography fontSize={"18px"} fontWeight={500}>
              A user has applied to this job
            </Typography>
          </Paper>
        )}
        <Stack
          className={styles.header}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/recruiter/jobs" passHref>
            <Button className={styles.backBtn}>
              <ArrowBack fontSize="small" />
              <Typography variant="body2" color="primary">
                Back
              </Typography>
            </Button>
          </Link>
        </Stack>
        <Box sx={{ pl: 0, ml: 0, mt: "20px" }}>
          <Typography className={styles.listingsTitle}>Job Listings</Typography>
          <SearchSortRow />
          <CandidateTable />
        </Box>
      </Container>
    </RecruiterLayout>
  );
}
