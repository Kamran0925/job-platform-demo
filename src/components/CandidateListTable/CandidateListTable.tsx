import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import JobPostingHeader from "../JobPostingHeader/JobPostingHeader";
import styles from "./CandidateListTable.module.css";
import Image from "next/image";

const candidateList = [
  {
    name: "Jane Doe",
    title: "Product Manager",
    location: "Stockholm",
    skills: ["IT", "Social", "Recruiting", "HR", "Design"],
    status: "Hired",
    match: 90,
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    location: "Stockholm",
    skills: ["IT", "Social", "Recruiting", "HR", "Design"],
    status: "InReview",
    match: 90,
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    location: "Stockholm",
    skills: ["IT", "Social", "Recruiting", "HR", "Design"],
    status: "Interview",
    match: 90,
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    location: "Stockholm",
    skills: ["IT", "Social", "Recruiting", "HR", "Design"],
    status: "Applied",
    match: 90,
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    location: "Stockholm",
    skills: ["IT", "Social", "Recruiting", "HR", "Design"],
    status: "InReview",
    match: 90,
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    location: "Stockholm",
    skills: ["IT", "Social", "Recruiting", "HR", "Design"],
    status: "Applied",
    match: 80,
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    location: "Stockholm",
    skills: ["IT", "Social", "Recruiting", "HR", "Design"],
    status: "Applied",
    match: 78,
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    location: "Stockholm",
    skills: ["IT", "Social", "Recruiting", "HR", "Design"],
    status: "Applied",
    match: 75,
  },
];

const statusColors: Record<
  string,
  "success" | "warning" | "info" | "secondary" | "default" | "primary" | "error"
> = {
  Hired: "success",
  InReview: "warning",
  Interview: "info",
  Applied: "secondary",
};

const CandidateTable = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: "0 0 43px",
        background: "#FFF",
      }}
    >
      <JobPostingHeader />
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          overflowX: "auto",
          padding: "0 26px 0 8px",
        }}
      >
        <Table sx={{ borderRadius: "6px" }}>
          <TableHead className={styles.rowHead}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell className={styles.headerCell}>Candidate</TableCell>
              <TableCell className={styles.headerCell}>Location</TableCell>
              <TableCell className={styles.headerCell}>
                Matching Skills
              </TableCell>
              <TableCell className={styles.headerCell}>Status</TableCell>
              <TableCell className={styles.headerCell}>Match Level</TableCell>
              <TableCell align="right" className={styles.headerCell}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidateList.map((candidate, index) => (
              <TableRow
                key={index}
                sx={{ cursor: "pointer", textDecoration: "none" }}
              >
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    <Avatar
                      src="/assets/profile-picture-2.png"
                      alt={candidate.name}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "115px",
                      }}
                    >
                      <Typography
                        color="#21272A"
                        fontWeight={600}
                        fontSize={"14px"}
                      >
                        {candidate.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {candidate.title}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography fontWeight={600}>{candidate.location}</Typography>
                </TableCell>
                <TableCell>
                  <Box className={styles.skillsWrapper}>
                    {candidate.skills.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        size="small"
                        className={styles.badgeChip}
                        variant={"filled"}
                      />
                    ))}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box className={styles.disabledDropdown}>
                    <Typography className={styles.labelText}>
                      {candidate.status}
                    </Typography>
                    <ArrowDropDownIcon fontSize="small" />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Image
                      src="/stars.svg"
                      alt="Stars"
                      width={20}
                      height={20}
                    />
                    <Typography fontWeight={500}>{candidate.match}%</Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={handleMenuClick}>
                    <MoreHorizIcon style={{ color: "#3F83F8" }} />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>View</MenuItem>
                    <MenuItem onClick={handleClose}>Message</MenuItem>
                    <MenuItem onClick={handleClose}>Remove</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CandidateTable;
