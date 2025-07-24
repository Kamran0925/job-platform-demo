"use client";

import {
  Box,
  Button,
  Chip,
  Typography,
  Avatar,
  Stack,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";
import { useApply } from "@/context/ApplyContext";
import Image from "next/image";
import Link from "next/link";
import styles from "./JobOverviewCard.module.css";

export default function JobOverviewCard({ id }: { id: string }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const { hasApplied, setHasApplied } = useApply();

  const handleApply = () => setOpenDialog(true);
  const handleConfirm = () => {
    setHasApplied(true);
    setShowSnackbar(true);
    setOpenDialog(false);
  };

  return (
    <>
      <Box
        sx={{
          width: {
            xs: "300px",
            sm: "100%",
          },
        }}
        className={styles.cardContainer}
      >
        <ConfirmationDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          onConfirm={handleConfirm}
        />

        <Snackbar
          open={showSnackbar}
          autoHideDuration={3000}
          onClose={() => setShowSnackbar(false)}
          message="Application submitted successfully!"
        />
        <Link
          href={`/user/jobs/${id}`}
          passHref
          style={{ textDecoration: "none", color: "initial" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: { xs: "center", md: "flex-start" },
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                gap: {
                  xs: "20px",
                  md: "10px",
                },
              }}
            >
              <Box display="flex" alignItems="center" gap={"16px"}>
                <Avatar
                  src="/assets/profile-picture-2.png"
                  alt="User"
                  sx={{ width: 62, height: 62 }}
                />
                <Box className={styles.cardInfo}>
                  <Typography className={styles.title}>
                    Graphic Designer
                  </Typography>
                  <Typography className={styles.subtitle}>
                    KNEG AB, Sweden
                  </Typography>
                </Box>
              </Box>

              <Box className={styles.chipContainer}>
                <Chip
                  label="FULL TIME"
                  variant="outlined"
                  className={styles.chip}
                />
                <Chip
                  label="HYBRID"
                  variant="outlined"
                  className={styles.chip}
                />
              </Box>
            </Box>

            <Stack
              direction="column"
              spacing={2}
              mt={"16px"}
              alignItems="center"
            >
              <Stack
                direction="row"
                alignItems="center"
                className={styles.align1}
              >
                <Image
                  src="/assets/calender.svg"
                  alt="calendar"
                  width={16}
                  height={16}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "150%",
                    letterSpacing: "0",
                  }}
                >
                  March 22, 2025
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                className={styles.align1}
              >
                <Image
                  src="/assets/amount.svg"
                  alt="amount"
                  width={16}
                  height={16}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "150%",
                    letterSpacing: "0",
                  }}
                >
                  100,000 EUR/yr
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                display: {
                  xs: "none",
                },
              }}
              direction="row"
              className={styles.align3}
            >
              {["IT", "Social", "Recruiting", "HR"].map((tag) => (
                <Chip key={tag} label={tag} className={styles.chip} />
              ))}
            </Stack>

            <Box className={styles.subContainer1}>
              <Typography className={styles.overviewTitle}>
                Job Overview
              </Typography>
              <ul className={styles.description}>
                <li>
                  <Typography className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </Typography>
                </li>
                <li>
                  <Typography className={styles.paragraph}>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                </li>
              </ul>
            </Box>
          </Box>
        </Link>

        <Box className={styles.actionContainer}>
          <Button variant="outlined" className={styles.saveBtn}>
            Save
          </Button>
          {!hasApplied && (
            <Button
              onClick={handleApply}
              variant="contained"
              className={styles.button}
            >
              Quick Apply
            </Button>
          )}
          {hasApplied && (
            <Button variant="outlined" className={styles.disabledBtn} disabled>
              You’ve applied
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}
