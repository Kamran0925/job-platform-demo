"use client";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  ButtonBase,
} from "@mui/material";
import classNames from "classnames";
import { NAV_LINKS } from "./NavLinks";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const [isHovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleLogoClick = () => {
    logout();
    router.push("/");
  };

  const navList = (
    <List className={styles.navList}>
      {NAV_LINKS.map((link, index) => (
        <ListItem
          key={link.route}
          disablePadding
          className={classNames(styles.navListItem)}
        >
          <ListItemButton
            key={index}
            className={styles.navBtn}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ListItemIcon sx={{ minWidth: 0 }}>
              <link.icon
                color={hoveredIndex === index ? "#1a56db" : "#9ca3af"}
              />
            </ListItemIcon>
            <ListItemText
              primary={link.label}
              className={classNames(
                hoveredIndex === index && styles.activeNavItem
              )}
              disableTypography
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <Box className={styles.sideNav}>
        <Box className={styles.logoContainer}>
          <ButtonBase onClick={handleLogoClick}>
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={129}
              height={57}
              className={styles.logo}
            />
          </ButtonBase>
        </Box>
        {navList}
      </Box>
    </>
  );
};

export default SideBar;
