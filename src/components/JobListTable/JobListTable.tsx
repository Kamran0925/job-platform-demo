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
import { useRouter } from "next/router";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Dropdown from "../DropDown/DropDown";
import styles from "./JobListTable.module.css";
import SearchInput from "../SearchFor/SearchFor";

const jobList = [
  {
    id: 0,
    title: "Senior UI/UX Designer",
    type: "Freelance",
    datePosted: "2025-02-10",
    applicants: 0,
    views: 0,
    status: "Open",
  },
  {
    id: 1,
    title: "Senior UI/UX Designer",
    type: "Extra Job",
    datePosted: "2025-01-15",
    applicants: 5,
    views: 120,
    status: "Draft",
  },
  {
    id: 2,
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
  const router = useRouter();

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
            display: {
              xs: "none",
              md: "flex",
            },
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
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell className={styles.headerCell}>Job Title</TableCell>
              <TableCell className={styles.headerCell}>Job Type</TableCell>
              <TableCell className={styles.headerCell}>Date Posted</TableCell>
              <TableCell className={styles.headerCell}>Applicants</TableCell>
              <TableCell className={styles.headerCell}>Views</TableCell>
              <TableCell className={styles.headerCell}>Status</TableCell>
              <TableCell align="right" className={styles.headerCell}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobList.map((job, index) => (
              <TableRow
                key={index}
                onClick={() => router.push(`/recruiter/jobs/${job.id}`)}
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "inherit",
                }}
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
                    variant="outlined"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px 10px",
                      height: "20px",
                      width: "77px",
                      background: "#F3F4F6",
                      borderRadius: "6px",
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "12px",
                      lineHeight: "18px",
                      border: "none",
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <MoreHorizIcon style={{ color: "#3F83F8" }} />
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
            mb: "20px",
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
