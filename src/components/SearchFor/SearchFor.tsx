import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import Image from "next/image";

const SearchInput = ({
  placeholder = "Search for...",
  color = "#76A9FA",
}: {
  placeholder?: string;
  color?: string;
}) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      padding="14px 0px"
      gap="8px"
      maxWidth="260px"
      height="52px"
      border="1px solid #E5E7EB"
      borderRadius="8px"
      boxSizing="border-box"
      sx={{ border: "none" }}
    >
      <TextField
        placeholder={placeholder}
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
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "18px",
            lineHeight: "130%",
            letterSpacing: "0%",
            border: "none",
          },
          "& .MuiInputBase-input::placeholder": {
            color: color,
            opacity: 1,
          },
        }}
        fullWidth
      />
    </Box>
  );
};

export default SearchInput;
