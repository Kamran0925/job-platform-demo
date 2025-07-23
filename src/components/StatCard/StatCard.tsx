import { Box, Typography } from "@mui/material";
import cn from "classnames";
import styles from "./StatCard.module.css";
import TrendingUpIcon from "../../../public/assets/icons/trending-up";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  percentage?: number;
}

export default function StatCard({
  title,
  value,
  icon,
  percentage,
}: StatCardProps) {
  return (
    <Box className={styles.card}>
      <Box className={styles.cardContainer}>
        <Box className={cn(styles.iconContainer, styles.warningBackground)}>
          {icon}
        </Box>
        <Box className={styles.cardInfo}>
          <Typography className={styles.cardTitle}>{title}</Typography>
          <Box display="flex" alignItems="center">
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
