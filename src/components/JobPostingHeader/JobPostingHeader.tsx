import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Chip,
  Button,
  Avatar,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PublicIcon from "@mui/icons-material/Public";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"; // For the '2' icon
import styles from "./JobPostingHeader.module.css"; // Import CSS module

const JobPostingHeader = () => {
  return (
    <Box className={styles.headerContainer}>
      <Box className={styles.topSection}>
        <Typography variant="h4" component="h1" className={styles.title}>
          Product Manager
        </Typography>
        <Box className={styles.actionButtons}>
          <Box className={styles.actionItem}>
            <VisibilityIcon fontSize="small" />
            <Typography variant="body2">View</Typography>
          </Box>
          <Box className={styles.actionItem}>
            <ShareIcon fontSize="small" />
            <Typography variant="body2">Share</Typography>
          </Box>
          <Box className={styles.actionItem}>
            <MailOutlineIcon fontSize="small" />
            <Typography variant="body2">Invite</Typography>
          </Box>
          <IconButton size="small">
            <EditIcon fontSize="small" />
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
          <AttachMoneyIcon fontSize="small" />
          <Typography variant="body2">800 SEK</Typography>
        </Box>
        <Box className={styles.infoItem}>
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2">01 Sep 2025</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box className={styles.infoItem}>
          <PublicIcon fontSize="small" />
          <Typography variant="body2">Replacere.org/Job/Ido</Typography>
        </Box>
        <Avatar sx={{ width: 24, height: 24 }}>
          <AccountCircleIcon />
        </Avatar>
      </Box>

      <Box className={styles.middleSectionRow}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Hired:
        </Typography>
        <Typography variant="body2" sx={{ ml: 0.5 }}>
          Stockholm, Sweden
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, ml: 2 }}>
          Starts:
        </Typography>
        <Typography variant="body2" sx={{ ml: 0.5 }}>
          01 Sep 2025
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" size="small" className={styles.button}>
          Chat with Jane
        </Button>
        <Button variant="outlined" size="small" className={styles.button}>
          Remove
        </Button>
      </Box>

      <Box className={styles.tabsSection}>
        <Chip label="All Candidates" clickable className={styles.activeTab} />
        <Chip label="New Candidates" clickable className={styles.tab} />
        <Chip label="Shortlisted" clickable className={styles.tab} />
      </Box>

      <Box className={styles.descriptionSection}>
        <Typography variant="body1" className={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box>
    </Box>
  );
};

export default JobPostingHeader;
