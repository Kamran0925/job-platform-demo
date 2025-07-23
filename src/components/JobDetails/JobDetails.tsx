"use client";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import {
  ArrowBack,
  CalendarMonth,
  AccessTime,
  Work,
} from "@mui/icons-material";
import Link from "next/link";
import styles from "./JobDetails.module.css";

const tags = ["Data", "Product", "UX", "Design"];

const JobDetails = () => {
  return (
    <Box className={styles.wrapper}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box>
          <Stack className={styles.header}>
            <Link href="/user/jobs" passHref>
              <Button className={styles.backBtn}>
                <ArrowBack fontSize="small" />
                <Typography variant="body2" color="primary">
                  Back
                </Typography>
              </Button>
            </Link>
          </Stack>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Typography className={styles.title}>Senior UX Designer</Typography>

            <Stack direction="row" className={styles.align1}>
              <Chip className={styles.chip} label="FULL-TIME" size="small" />
              <Chip className={styles.chip} label="HYBRID" size="small" />
            </Stack>
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "14px 24px",
            gap: "8px",
            width: "139px",
            height: "51px",
            backgroundColor: "#1A56DB",
            borderRadius: "8px",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#174CC8",
              boxShadow: "none",
            },
          }}
        >
          Apply Now
        </Button>
      </Box>
      <Stack
        sx={{
          marginTop: "32px",
          gap: "16px",
        }}
      >
        <Info
          icon={<CalendarMonth fontSize="small" />}
          text="Posted on March 22, 2025"
        />
        <Info
          icon={<AccessTime fontSize="small" />}
          text="Apply before April 30, 2025"
        />
        <Info icon={<Work fontSize="small" />} text="Intelligent Apps" bold />
        <Info
          icon={<img src="/assets/dollar.svg" alt="Salary" height={18} />}
          text="100,000 EUR/yr"
          bold
        />
        <Info
          icon={<img src="/assets/key.svg" alt="Salary" height={18} />}
          text=""
          component={
            <Stack direction="row" spacing={1}>
              {tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  sx={{
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "18px",
                    textAlign: "center",
                  }}
                />
              ))}
            </Stack>
          }
          bold
        />
      </Stack>
      <Section
        title="Company Overview"
        bullets={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ]}
        paragraph
      />
      <Section
        title="Job Overview"
        bullets={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
          " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ]}
      />
      <Section
        title="Key Responsibilities"
        bullets={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
          " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ]}
      />
      <Section
        title="Candidate Requirements"
        bullets={[
          "Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on",
          "3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications",
          "Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel",
          "Working regularly with APIs and Web Services (REST, GrapthQL, SOAP, etc)",
          "Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.",
        ]}
      />
    </Box>
  );
};

const Info = ({
  icon,
  text = "",
  bold = false,
  component = null,
}: {
  icon: React.ReactNode;
  text: string;
  component?: React.ReactNode;
  bold?: boolean;
}) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    {icon}
    <Typography variant="body2" fontWeight={bold ? 600 : 400}>
      {text}
    </Typography>
    {component}
  </Stack>
);

const Section = ({
  title,
  bullets,
  paragraph = false,
}: {
  title: string;
  bullets: string[];
  paragraph?: boolean;
}) => (
  <Box mb={4}>
    <Typography variant="subtitle1" fontWeight={600} mb={1}>
      {title}
    </Typography>
    {paragraph ? (
      bullets.map((item, i) => (
        <Typography key={i} variant="body2" color="text.secondary" mb={1}>
          {item}
        </Typography>
      ))
    ) : (
      <ul className={styles.bulletList}>
        {bullets.map((item, i) => (
          <li key={i}>
            <Typography variant="body2" color="text.secondary">
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    )}
  </Box>
);

export default JobDetails;
