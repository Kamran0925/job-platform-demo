"use client";
import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowBack,
  CalendarMonth,
  AccessTime,
  Work,
  MoreHoriz,
} from "@mui/icons-material";
import styles from "./JobDetails.module.css";

const tags = ["Data", "Product", "UX", "Design"];

const JobDetails = () => {
  return (
    <Box className={styles.wrapper}>
      <Stack className={styles.header}>
        <Button className={styles.backBtn}>
          <ArrowBack fontSize="small" />
          <Typography variant="body2" color="primary">
            Back
          </Typography>
        </Button>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            Apply Now
          </Button>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Stack>
      </Stack>

      <Typography className={styles.title}>Senior UX Designer</Typography>

      <Stack direction="row" className={styles.align1}>
        <Chip label="FULL-TIME" size="small" />
        <Chip label="HYBRID" size="small" />
      </Stack>

      <Stack spacing={1} mb={2}>
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
          icon={<img src="/icons/salary.svg" alt="Salary" height={18} />}
          text="100,000 EUR/yr"
          bold
        />
        <Stack direction="row" spacing={1}>
          {tags.map((tag, idx) => (
            <Chip key={idx} label={tag} size="small" />
          ))}
        </Stack>
      </Stack>

      <Divider sx={{ my: 2 }} />

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
  text,
  bold = false,
}: {
  icon: React.ReactNode;
  text: string;
  bold?: boolean;
}) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    {icon}
    <Typography variant="body2" fontWeight={bold ? 600 : 400}>
      {text}
    </Typography>
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
