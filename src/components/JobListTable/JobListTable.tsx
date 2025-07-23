import React, { useState } from "react";
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
  Pagination,
  Stack,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./JobListTable.module.css";
import Dropdown from "../DropDown/DropDown";

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
  const [page, setPage] = useState(2);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <Box>
      <Box className={styles.tableTop}>
        <Dropdown label="Job Status" />
        <Dropdown label="Job Type" />
        <Dropdown label="Date Posted" />
        <Dropdown label="Applicants" />
      </Box>
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
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignSelf="flex-end"
          mt={2}
        >
          <Pagination
            count={100}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            showFirstButton
            showLastButton
          />
        </Stack>
      </TableContainer>
    </Box>
  );
};

export default JobListTable;
