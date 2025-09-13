import { useContext, useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import { ThemeContext } from "../theme/theme.context";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LanguageIcon from "@mui/icons-material/Language";

interface NavbarProps {
  onNavigate: (section: "hero" | "skills" | "links") => void;
}

const NavBar = ({ onNavigate }: NavbarProps) => {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);
  const { data, direction, switchLanguage } = useLanguage();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);

  const handleChangeLanguage = () => {
    switchLanguage(data.lang === "en" ? "he" : "en");
    handleMenuClose();
  };

  const handleNavigate = (navLabel: string) => {
    const selectionId = data.navItems.find(
      (item) => item.label === navLabel
    )?.id;
    if (selectionId) {
      onNavigate(selectionId as "hero" | "skills" | "links");
    }
    handleMenuClose();
  };

  // nav items from language
  const navItems = isMobile
    ? data.navItems.map((item) => item.label)
    : direction === "rtl"
    ? [...data.navItems.map((item) => item.label)].reverse()
    : data.navItems.map((item) => item.label);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 1000,
        backgroundColor: theme.custom.background,
        color: theme.custom.text,
        boxShadow: 1,
        display: "flex",
        alignItems: "center",
        height: "64px",
        px: 2,
        overflowX: "hidden",
      }}
    >
      {/* Desktop Nav */}
      {!isMobile && (
        <Stack
          direction="row"
          spacing={4}
          sx={{
            flex: 1,
            justifyContent: "center",
            flexDirection: direction === "rtl" ? "row-reverse" : "row",
            textAlign: direction === "rtl" ? "right" : "left",
          }}
        >
          {navItems.map((item: string) => (
            <Button
              key={item}
              sx={theme.custom.button}
              variant="text"
              disabled={item.includes("(Dev)") || item.includes("(בפיתוח)")}
              onClick={() => handleNavigate(item)}
            >
              {item}
            </Button>
          ))}
        </Stack>
      )}

      {/* Mobile Nav */}
      {isMobile && (
        <>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{
              position: "absolute",
              left: 16, // always left
              color: theme.custom.button.color,
            }}
          >
            <span style={{ fontSize: 28 }}>&#9776;</span>
          </IconButton>
          <Drawer
            anchor="top"
            open={menuOpen}
            onClose={handleMenuClose}
            slotProps={{
              paper: {
                sx: {
                  width: "100vw",
                  mt: "64px", // push below navbar
                  borderRadius: 0,
                  backgroundColor: theme.custom.background,
                  color: theme.custom.button.color,
                  overflowX: "hidden",
                },
              },
            }}
          >
            <List>
              {navItems.map((item: string) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton
                    sx={{ color: theme.custom.button.color }}
                    onClick={() => handleNavigate(item)}
                  >
                    {item}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      )}

      {/* Theme & Language Buttons */}
      <Box
        sx={{
          position: "absolute",
          right: 24,
          display: "flex",
          direction: "ltr",
          gap: 1,
        }}
      >
        <IconButton onClick={toggleTheme} size="large">
          {theme.palette.mode === "light" ? <BedtimeIcon /> : <SunnyIcon />}
        </IconButton>
        <IconButton onClick={handleChangeLanguage} size="large">
          <LanguageIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;
