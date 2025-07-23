import UserLayout from "../../../layouts/UserLayout/UserLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import UserProfileCard from "@/components/UserProfileCard/UserProfileCard";
import GeneralInfo from "@/components/GeneralInfo/GeneralInfo";
import UserIntro from "@/components/UserIntro/UserIntro";
import SortByDropdown from "@/components/SortByDropdown/SortByDropdown";
import JobOverviewCard from "@/components/JobOverviewCard/JobOverviewCard";
import Image from "next/image";
import { InputAdornment } from "@mui/material";

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
            <JobOverviewCard key={i} id={i.toString()} />
          ))}
        </Box>

        <Box className={styles.subContainer3}>
          <Typography className={styles.title}>Search jobs</Typography>
          <TextField
            placeholder="Title or Keywords"
            variant="outlined"
            fullWidth
            className={styles.inputField1}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Image
                    src="/assets/search.svg"
                    alt="search"
                    width={16}
                    height={16}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#C3DDFD",
                },
                "&:hover fieldset": {
                  borderColor: "#76A9FA",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#76A9FA",
                },
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#76A9FA",
                opacity: 1,
              },
            }}
          />
          <TextField
            select
            label="Company"
            fullWidth
            className={styles.inputField2}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          ></TextField>
          <SortByDropdown />
        </Box>
      </Box>
    </UserLayout>
  );
}
