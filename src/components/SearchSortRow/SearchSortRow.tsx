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
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        padding="14px 0px"
        gap="8px"
        width="260px"
        height="52px"
        border="1px solid #E5E7EB"
        borderRadius="8px"
        boxSizing="border-box"
      >
        <TextField
          placeholder="Search for..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src="/assets/search.svg"
                  alt="search"
                  width={18}
                  height={18}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiInputBase-input": {
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "130%",
              letterSpacing: "0%",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#76A9FA",
              opacity: 1,
            },
          }}
          fullWidth
        />
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="16px"
        height="37px"
        width="222px"
      >
        <Typography
          fontSize="14px"
          fontWeight="500"
          fontFamily="Inter"
          color="#4B5563"
        >
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
            fontFamily: "Inter",
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
