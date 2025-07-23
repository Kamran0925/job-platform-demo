import { Avatar, Typography, Button, Box } from "@mui/material";
import styles from "./UserProfileCard.module.css";

const skills = ["React", "Node.js", "TypeScript", "GraphQL"];

export default function UserProfileCard() {
  return (
    <Box className={styles.card}>
      <Avatar
        alt="User Profile"
        src="/assets/profile-picture-1.png"
        className={styles.avatar}
      />
      <Typography variant="h6" className={styles.name}>
        Steve Smith{" "}
      </Typography>
      <Typography variant="body2" className={styles.title}>
        Graphic Designer{" "}
      </Typography>
      <Box className={styles.skills}>
        {skills.map((skill) => (
          <Box key={skill} className={styles.skillChip}>
            {skill}
          </Box>
        ))}
      </Box>
      <Button variant="outlined" size="small" className={styles.editBtn}>
        Edit Profile
      </Button>
    </Box>
  );
}
