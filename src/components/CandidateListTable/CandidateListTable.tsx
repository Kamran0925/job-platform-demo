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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import JobPostingHeader from "../JobPostingHeader/JobPostingHeader";

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
    <>
      <JobPostingHeader />
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Candidate</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Matching Skills</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Match Level</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidateList.map((candidate, index) => (
              <TableRow key={index} hover>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    <Avatar
                      src="/assets/profile-picture-2.png"
                      alt={candidate.name}
                    />
                    <Box>
                      <Typography fontWeight={600}>{candidate.name}</Typography>
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
                  <Box display="flex" gap={1} flexWrap="wrap">
                    {candidate.skills.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        size="small"
                        variant={idx >= 4 ? "outlined" : "filled"}
                      />
                    ))}
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip
                    label={candidate.status}
                    size="small"
                    color={statusColors[candidate.status]}
                  />
                </TableCell>
                <TableCell>
                  <Typography fontWeight={500}>{candidate.match}%</Typography>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
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
    </>
  );
};

export default CandidateTable;
