import { Modal, Box, Typography, Button, Stack } from "@mui/material";
import styles from "./AuthModal.module.css";
import classNames from "classnames";

export default function AuthModal({
  open,
  onSelect,
}: {
  open: boolean;
  onSelect: (type: "recruiter" | "user") => void;
}) {
  return (
    <Modal open={open}>
      <Box className={classNames(styles.modalContainer)}>
        <Typography variant="h5" className={styles.title}>
          Welcome! 👋
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          Are you a recruiter or a job seeker? Choose your role to continue.
        </Typography>
        <Stack spacing={2} mt={3}>
          <Button
            variant="contained"
            className={styles.button}
            onClick={() => onSelect("recruiter")}
          >
            I’m a Recruiter
          </Button>
          <Button
            variant="outlined"
            className={styles.button}
            onClick={() => onSelect("user")}
          >
            I’m a Job Seeker
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
