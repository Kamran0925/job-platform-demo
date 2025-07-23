import { Avatar, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import styles from "./UserProfileCard.module.css";

const skills = [
  "Communication",
  "Teamwork",
  "Jira",
  "Collaboration",
  "Faciliation",
  "Figma",
  "Management",
  "Canva",
  "Adode XD",
  "Public Speaking",
];

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
      <Button variant="outlined" className={styles.editBtn}>
        <Image
          src="/assets/notepad.svg"
          alt="edit"
          width={16}
          height={16}
          style={{ marginRight: 6 }}
        />
        Edit Profile
      </Button>
    </Box>
  );
}
