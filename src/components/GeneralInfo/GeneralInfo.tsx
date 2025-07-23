import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import styles from "./GeneralInfo.module.css";

const infoItems = [
  { icon: <Email />, label: "stevesmith@gmail.com" },
  { icon: <Phone />, label: "+46780000000" },
  { icon: <LocationOn />, label: "Stockholm, Sweden" },
  { icon: <LocationOn />, label: "190003050050" },
];

const GeneralInfo = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h6" className={styles.title}>
        General Information
      </Typography>
      <List className={styles.list}>
        {infoItems.map((item, index) => (
          <ListItem key={index} disableGutters className={styles.listItem}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              className={styles.listItemsText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GeneralInfo;
