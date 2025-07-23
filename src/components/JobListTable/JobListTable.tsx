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
  PaginationItem,
} from "@mui/material";
import NextLink from "next/link";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dropdown from "../DropDown/DropDown";
import styles from "./JobListTable.module.css";
import SearchInput from "../SearchFor/SearchFor";

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
      <Box
        className={styles.tableTop}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Dropdown label="Job Status" />
          <Dropdown label="Job Type" />
          <Dropdown label="Date Posted" />
          <Dropdown label="Applicants" />
        </Box>
        <SearchInput placeholder="Search Candidates" color="#D1D5DB" />
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          overflowX: "auto",
        }}
        className={styles.tableContainer}
      >
        <Table
          className={styles.table}
          sx={{
            minWidth: 800,
          }}
        >
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
              <TableRow
                key={index}
                component={NextLink}
                href={`/recruiter/jobs/${index + 1}`}
                sx={{ cursor: "pointer", textDecoration: "none" }}
              >
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            mt: 2,
          }}
        >
          <Pagination
            count={100}
            page={page}
            onChange={handleChange}
            boundaryCount={1}
            siblingCount={0}
            variant="outlined"
            shape="rounded"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "0px 20px 0px 0px",
              gap: "0px !important",
              minWidth: "291px",
              height: "33px",
              "& .MuiPagination-ul": {
                gap: 0,
                padding: 0,
                margin: 0,
              },
            }}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "6px 12px",
                  width: "33px",
                  height: "33px",
                  backgroundColor: item.selected
                    ? "#E1EFFE !important"
                    : "#fff",
                  border: "1px solid #D1D5DB",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: item.selected ? "#1C64F2" : "#6B7280",
                  textAlign: "center",
                }}
              />
            )}
          />
        </Box>
      </TableContainer>
    </Box>
  );
};

export default JobListTable;
