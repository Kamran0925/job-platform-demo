import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import SearchInput from "../SearchFor/SearchFor";

export default function SearchSortRow() {
  const [sortValue, setSortValue] = useState("matching");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      mt={"20px"}
    >
      <SearchInput />

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="16px"
        height="37px"
        width="222px"
      >
        <Typography fontSize="16px" fontWeight="400" color="#4B5563">
          Sort by:
        </Typography>
        <Select
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
          variant="outlined"
          size="small"
          sx={{
            fontSize: "14px",
            color: "#4B5563",
            height: "37px",
          }}
        >
          <MenuItem value="matching">Matching Level</MenuItem>
          <MenuItem value="recent">Recently Added</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
