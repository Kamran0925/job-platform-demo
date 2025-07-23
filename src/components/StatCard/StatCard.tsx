import { Box, Typography } from "@mui/material";
import TrendingUpIcon from "../../../public/assets/icons/trending-up";
import styles from "./StatCard.module.css";

interface StatCardProps {
  index: number;
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  percentage?: string;
}

const backgrounds = ["#fdf6b2", "#def7ec", "#EDEBFE", "#fce8f3"];

export default function StatCard({
  index,
  title,
  value,
  icon,
  percentage,
}: StatCardProps) {
  return (
    <Box className={styles.card}>
      <Box className={styles.cardContainer}>
        <Box
          className={styles.iconContainer}
          sx={{ backgroundColor: backgrounds[index % 4] }}
        >
          {icon}
        </Box>
        <Box className={styles.cardInfo}>
          <Typography className={styles.cardTitle}>{title}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
              width: "100%",
            }}
          >
            <Typography className={styles.cardValue}>{value}</Typography>
            <span className={styles.cardPercentage}>
              {percentage}% <TrendingUpIcon />
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
