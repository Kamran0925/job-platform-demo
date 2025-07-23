import React, { useEffect, useState } from "react";
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
import Image from "next/image";

const sortOptions = [
  "Highest March",
  "Remote",
  "Full time",
  "Internship",
  "Recently Posted",
];

const SortByDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(typeof value === "string" ? value.split(",") : value);
  };

  const handleScroll = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        width: "281px",
        height: "290px",
        position: "sticky",
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          shrink={false}
          sx={{
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "130%",
            letterSpacing: "0",
          }}
        >
          Sort by
        </InputLabel>

        <Select
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          multiple
          value={selectedOptions}
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={{
            disablePortal: true,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            PaperProps: {
              sx: {
                mt: 0,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "4px",
                width: "281px",
              },
            },
            MenuListProps: {
              dense: true,
              sx: {
                padding: 0,
              },
            },
          }}
          sx={{
            "& .MuiSelect-select": {
              padding: "10px",
              minHeight: "40px",
              fontSize: "16px",
            },
            "& fieldset": {
              borderColor: "#C3DDFD",
            },
            "&:hover fieldset": {
              borderColor: "#76A9FA",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#76A9FA",
            },
          }}
        >
          {sortOptions.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{
                padding: "8px 16px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <Checkbox
                checked={selectedOptions.indexOf(option) > -1}
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#F9FAFB",
                  borderRadius: "4px",
                  "& .MuiSvgIcon-root": {
                    fontSize: "24px",
                  },
                  "& .MuiCheckbox-root": {
                    border: "none",
                  },
                  "&:hover": {
                    backgroundColor: "#F9FAFB",
                  },
                }}
                disableRipple
              />
              <ListItemText primary={option} />
            </MenuItem>
          ))}

          <MenuItem
            disableRipple
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "130%",
              letterSpacing: "0",
              color: "#76A9FA",
              padding: "18.5px 16px",
            }}
          >
            <Image
              src="/assets/plus.svg"
              alt="plus"
              width={16}
              height={16}
              style={{
                filter:
                  "invert(59%) sepia(90%) saturate(689%) hue-rotate(187deg) brightness(102%) contrast(104%)",
              }}
            />
            Show more options
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortByDropdown;
