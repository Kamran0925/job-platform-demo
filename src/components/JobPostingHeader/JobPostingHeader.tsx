import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarIcon from "../../../public/assets/icons/calender";
import Image from "next/image";
import styles from "./JobPostingHeader.module.css";

const tabItems = [
  { label: "Matches", count: 300 },
  { label: "Applied", count: 150 },
  { label: "In Review", count: 75 },
  { label: "Offered", count: 0 },
  { label: "Rejected", count: 0 },
];
const JobPostingHeader = () => {
  return (
    <Box className={styles.headerContainer}>
      <Box className={styles.topSection}>
        <Typography variant="h4" component="h1" className={styles.title}>
          Product Manager
        </Typography>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
          className={styles.actionButtons}
        >
          <Box className={styles.actionItem}>
            <VisibilityIcon fontSize="small" />
            <Typography variant="body2" className={styles.actions}>
              View
            </Typography>
          </Box>
          <Box className={styles.actionItem}>
            <ShareIcon fontSize="small" />
            <Typography variant="body2" className={styles.actions}>
              Share
            </Typography>
          </Box>
          <Box className={styles.actionItem}>
            <MailOutlineIcon fontSize="small" />
            <Typography variant="body2" className={styles.actions}>
              Invite
            </Typography>
          </Box>
          <IconButton size="small">
            <EditIcon fontSize="small" />
            <Typography variant="body2" className={styles.actions}>
              Edit
            </Typography>
          </IconButton>
        </Box>
      </Box>

      <Box className={styles.middleSectionRow}>
        <Box className={styles.infoItem}>
          <BusinessCenterIcon fontSize="small" />{" "}
          <Typography variant="body2">2</Typography>
        </Box>
        <Box className={styles.infoItem}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">Stockholm, Sweden</Typography>
        </Box>
        <Box className={styles.infoItem}>
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2">01 Sep 2025</Typography>
        </Box>
        <Box className={styles.infoItem}>
          <AttachMoneyIcon fontSize="small" />
          <Typography variant="body2">800 SEK</Typography>
        </Box>
        <br />
        <Box className={styles.infoItem}>
          <CalendarIcon fill="#111928" />
          <Typography
            sx={{
              width: "70%",
              marginLeft: "10px",
            }}
            variant="body2"
          >
            defining the vision for a product, setting goals, prioritizing
            features, and coordinating between design, engineering, and business
            teams to deliver valuable products that meet user and market needs.
          </Typography>
        </Box>
      </Box>
      <Box className={styles.align}>
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
          }}
          className={styles.tabsContainer}
        >
          {tabItems.map((item, idx) => (
            <Box className={styles.tab} key={idx}>
              <Typography className={styles.tabLabel}>{item.label}</Typography>
              {item.count > 0 && (
                <Box className={styles.badge}>{item.count}</Box>
              )}
            </Box>
          ))}

          <Box className={styles.addTab}>
            <Typography className={styles.addTabText}>+ Add Tab</Typography>
          </Box>
        </Box>
        <Box className={styles.infoItem}>
          <Image src="/grid.svg" alt="Grid Icon" width={24} height={24} />
          <Typography variant="body2">Cards View</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JobPostingHeader;
