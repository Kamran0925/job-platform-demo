import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import styles from "./GeneralInfo.module.css";

const infoItems = [
  {
    icon: <Image src="/assets/mail.svg" alt="email" width={18} height={18} />,
    label: "stevesmith@gmail.com",
  },
  {
    icon: <Image src="/assets/phone.svg" alt="email" width={18} height={18} />,
    label: "+46780000000",
  },
  {
    icon: (
      <Image src="/assets/location.svg" alt="email" width={18} height={18} />
    ),
    label: "Stockholm, Sweden",
  },
  {
    icon: <Image src="/assets/record.svg" alt="email" width={18} height={18} />,
    label: "190003050050",
  },
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
