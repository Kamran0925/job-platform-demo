import UserLayout from "../../../layouts/UserLayout/UserLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import UserProfileCard from "@/components/UserProfileCard/UserProfileCard";
import GeneralInfo from "@/components/GeneralInfo/GeneralInfo";
import UserIntro from "@/components/UserIntro/UserIntro";
import SortByDropdown from "@/components/SortByDropdown/SortByDropdown";
import JobOverviewCard from "@/components/JobOverviewCard/JobOverviewCard";
import styles from "./style.module.css";

export default function UserJobListingsPage() {
  return (
    <UserLayout>
      <Box className={styles.container1}>
        <Box className={styles.subContainer1}>
          <UserProfileCard />
          <GeneralInfo />
          <UserIntro />
          <Button className={styles.savedJobsButton}>View Saved Jobs</Button>
        </Box>

        <Box className={styles.subContainer2}>
          <Typography className={styles.trendingTitle}>
            Trending Job Postings
          </Typography>
          <Typography className={styles.subtitle}>
            Check out recent and trending jobs
          </Typography>

          {Array.from({ length: 4 }).map((_, i) => (
            <JobOverviewCard key={i} />
          ))}
        </Box>

        <Box className={styles.subContainer3}>
          <Typography className={styles.title}>Search jobs</Typography>
          <TextField
            label="Title or Keywords"
            variant="outlined"
            fullWidth
            className={styles.inputField1}
          />
          <TextField
            select
            label="Company"
            fullWidth
            className={styles.inputField2}
          ></TextField>
          <SortByDropdown />
        </Box>
      </Box>
    </UserLayout>
  );
}
