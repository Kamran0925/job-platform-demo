import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import styles from "./SortByDropdown.module.css";

const sortOptions = [
  "Newest",
  "Oldest",
  "Highest Salary",
  "Lowest Salary",
  "Relevance",
];

const SortByDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width={250} className={styles.sortDropdown}>
      <FormControl fullWidth>
        <InputLabel>Sort By</InputLabel>
        <Select
          multiple
          value={selectedOptions}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {sortOptions.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={selectedOptions.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortByDropdown;
