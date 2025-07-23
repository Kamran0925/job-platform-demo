import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import styles from "./UserIntro.module.css";

const skills = ["React", "TypeScript", "Next.js", "MUI", "Tailwind"];

const UserIntro = () => {
  return (
    <Box className={styles.wrapper}>
      <Typography variant="h6" className={styles.title}>
        My Job Coach
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        mb={2}
        className={styles.profile}
      >
        <Avatar
          alt="profile picture"
          src="/assets/profile-picture-2.png"
          sx={{ width: 40, height: 40 }}
          className={styles.avatar}
        />
        <Stack className={styles.info}>
          <Typography className={styles.name}>Anna Brown</Typography>
          <Typography className={styles.profession}>Job Coach</Typography>
        </Stack>
      </Stack>

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
