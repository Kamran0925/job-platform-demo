import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import styles from "./UserIntro.module.css";

const skills = ["HR", "IT Recruiter"];

const UserIntro = () => {
  return (
    <Box className={styles.wrapper}>
      <Typography variant="h6" className={styles.title}>
        My Job Coach
      </Typography>

      <Box className={styles.profile}>
        <Avatar
          alt="profile picture"
          src="/assets/profile-picture-2.png"
          className={styles.avatar}
        />
        <Box className={styles.info}>
          <Typography className={styles.name}>Anna Brown</Typography>
          <Typography className={styles.profession}>Job Coach</Typography>
        </Box>
      </Box>

      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        className={styles.skills}
      >
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} className={styles.chip} />
        ))}
      </Stack>
    </Box>
  );
};

export default UserIntro;
