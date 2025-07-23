"use client";

import { Box, Button, Chip, Typography, Avatar, Stack } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import styles from "./JobOverviewCard.module.css";

export default function JobOverviewCard() {
  return (
    <Box className={styles.cardContainer}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={"16px"}>
          <Avatar
            src="/assets/profile-picture-2.png"
            alt="User"
            sx={{ width: 62, height: 62 }}
          />
          <Box className={styles.cardInfo}>
            <Typography className={styles.title}>Graphic Designer</Typography>
            <Typography className={styles.subtitle}>KNEG AB, Sweden</Typography>
          </Box>
        </Box>

        <Stack>
          <Chip label="FULL TIME" variant="outlined" className={styles.chip} />
          <Chip label="HYBRID" variant="outlined" className={styles.chip} />
        </Stack>
      </Box>

      <Stack direction="column" spacing={2} mt={2} alignItems="center">
        <Stack direction="row" alignItems="center" className={styles.align1}>
          <CalendarTodayIcon fontSize="small" />
          <Typography fontSize={14}>March 22, 2025</Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          <AttachMoneyIcon fontSize="small" />
          <Typography fontSize={14}>100,000 EUR/yr</Typography>
        </Stack>
      </Stack>

      <Stack direction="row" className={styles.align3}>
        {["IT", "Social", "Recruiting", "HR"].map((tag) => (
          <Chip key={tag} label={tag} className={styles.chip} />
        ))}
      </Stack>

      <Box className={styles.subContainer1}>
        <Typography className={styles.overviewTitle}>Job Overview</Typography>
        <ul className={styles.description}>
          <li>
            <Typography className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </Typography>
          </li>
          <li>
            <Typography className={styles.paragraph}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Typography>
          </li>
        </ul>
      </Box>

      <Stack direction="row" className={styles.actionContainer}>
        <Button variant="outlined" className={styles.button}>
          Save
        </Button>
        <Button variant="contained" className={styles.buttonActive}>
          Quick Apply
        </Button>
      </Stack>
    </Box>
  );
}
