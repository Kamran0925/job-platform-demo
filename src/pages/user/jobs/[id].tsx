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
        <Box
          sx={{
            flexDirection: {
              xs: "row",
              md: "column",
            },
            flexBasis: {
              xs: "1",
            },
            flexWrap: "wrap",
          }}
          className={styles.subContainer1}
        >
          <UserProfileCard />
          <GeneralInfo />
          <UserIntro />
          <Button className={styles.savedJobsButton}>View Saved Jobs</Button>
        </Box>
        <Box
          className={styles.subContainer2}
          sx={{
            backgroundColor: "#FFF !important",
            padding: { xs: "0px", md: "40px" },
          }}
        >
          <JobDetails />
        </Box>
      </Box>
    </UserLayout>
  );
}
