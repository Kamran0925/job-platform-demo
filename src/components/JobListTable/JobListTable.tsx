import React from "react";
import {
  Box,
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./JobListTable.module.css";

const jobList = [
  {
    title: "Senior UI/UX Designer",
    type: "Freelance",
    datePosted: "2025-02-10",
    applicants: 0,
    views: 0,
    status: "Open",
  },
  {
    title: "Senior UI/UX Designer",
    type: "Extra Job",
    datePosted: "2025-01-15",
    applicants: 5,
    views: 120,
    status: "Draft",
  },
  {
    title: "Senior UI/UX Designer",
    type: "Part time",
    datePosted: "2024-12-20",
    applicants: 10,
    views: 80,
    status: "Closed",
  },
];

const JobListTable = () => {
  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Job Type</TableCell>
            <TableCell>Date Posted</TableCell>
            <TableCell>Applicants</TableCell>
            <TableCell>Views</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobList.map((job, index) => (
            <TableRow key={index} hover>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <Box>{job.title}</Box>
              </TableCell>
              <TableCell>
                <Box>{job.type}</Box>
              </TableCell>
              <TableCell>
                <Box>{job.datePosted}</Box>
              </TableCell>
              <TableCell>
                <Box>{job.applicants}</Box>
              </TableCell>
              <TableCell>
                <Box>{job.views}</Box>
              </TableCell>
              <TableCell>
                <Chip
                  label={job.status}
                  size="small"
                  color={"default"}
                  variant="outlined"
                />
              </TableCell>
              <TableCell align="right">
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
                <Menu open={false}>
                  <MenuItem>View</MenuItem>
                  <MenuItem>Edit</MenuItem>
                  <MenuItem>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobListTable;
