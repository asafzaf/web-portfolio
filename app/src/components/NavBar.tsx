import { useContext, useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { ThemeContext } from "../theme/theme.context";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";

import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LanguageIcon from "@mui/icons-material/Language";

const NavBar = () => {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);
  const { data, direction, switchLanguage } = useLanguage();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleChangeLanguage = () => {
    switchLanguage(data.lang === "en" ? "he" : "en");
  };

  // nav items from language
  const navItems =
    direction === "rtl" ? [...data.navItems].reverse() : data.navItems;

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
            <Button key={item} sx={theme.custom.button} variant="text">
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
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ ml: 1 }}
          >
            <span style={{ fontSize: 28 }}>&#9776;</span>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {navItems.map((item: string) => (
              <MenuItem key={item} onClick={handleMenuClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}

      {/* Theme & Language Buttons */}
      <Box sx={{ position: "absolute", right: 24, display: "flex", direction: "ltr", gap: 1 }}>
        <IconButton onClick={toggleTheme} size="large">
          {theme.palette.mode === "light" ? <BedtimeIcon /> : <SunnyIcon />}
        </IconButton>

        {/* Add your language toggle here */}
        <IconButton onClick={handleChangeLanguage} size="large">
          <LanguageIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavBar;
