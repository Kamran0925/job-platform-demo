import JobDetails from "@/components/JobDetails/JobDetails";
import UserLayout from "../../../layouts/UserLayout/UserLayout";
import { Box, Button } from "@mui/material";
import GeneralInfo from "@/components/GeneralInfo/GeneralInfo";
import UserIntro from "@/components/UserIntro/UserIntro";
import UserProfileCard from "@/components/UserProfileCard/UserProfileCard";
import styles from "./style.module.css";

export default function JobDetailsPage() {
  return (
    <UserLayout>
      <Box className={styles.container1}>
        <Box className={styles.subContainer1}>
          <UserProfileCard />
          <GeneralInfo />
          <UserIntro />
          <Button variant="text" sx={{ backgroundColor: "transparent" }}>
            View Saved Jobs
          </Button>
        </Box>
        <Box className={styles.subContainer2}>
          <JobDetails />
        </Box>
      </Box>
    </UserLayout>
  );
}
