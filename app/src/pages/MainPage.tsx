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

import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Hero from "../components/Hero";

const MainPage = () => {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      minHeight="100vh"
      minWidth="100vw"
      sx={{
        backgroundColor: theme.custom.background,
        color: theme.custom.text,
      }}
    >
      {/* Fixed Navbar */}
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
            sx={{ flex: 1, justifyContent: "center" }}
          >
            <Button sx={theme.custom.button} variant="text">
              About
            </Button>
            <Button sx={theme.custom.button} variant="text">
              Skills
            </Button>
            <Button sx={theme.custom.button} variant="text">
              Experience
            </Button>
            <Button sx={theme.custom.button} variant="text">
              Contact
            </Button>
          </Stack>
        )}
        {/* Mobile Nav: Hamburger */}
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
              <MenuItem onClick={handleMenuClose}>About</MenuItem>
              <MenuItem onClick={handleMenuClose}>Skills</MenuItem>
              <MenuItem onClick={handleMenuClose}>Experience</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
            </Menu>
          </>
        )}
        {/* Theme IconButton - top right */}
        <Box sx={{ position: "absolute", right: 24 }}>
          <IconButton onClick={toggleTheme} size="large">
            {theme.palette.mode === "light" ? <BedtimeIcon /> : <SunnyIcon />}
          </IconButton>
        </Box>
      </Box>
      {/* Main Content */}
      <Box
        sx={{
          pt: "80px",
          minHeight: `calc(100vh - 80px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Hero />
      </Box>
    </Box>
  );
};
export default MainPage;
