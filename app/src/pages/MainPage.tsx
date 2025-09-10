import { useContext, useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { ThemeContext } from "../theme/theme.context";
import { useTheme } from "@mui/material/styles";

import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";

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
        <Stack
          direction="row"
          spacing={10}
          alignItems="flex"
          sx={{
            width: { xs: "95vw", sm: 700, md: "95vw" },
            height: { xs: 300, sm: 400, md: 500 },
            minHeight: 300,
            minWidth: 320,
            backgroundColor: "transparent",
            borderRadius: 6,
            boxShadow: 0,
            px: { xs: 2, sm: 6 },
            py: { xs: 3, sm: 6 },
          }}
        >
          {/* Profile Photo Circle with floating effect */}
          <Box
            sx={{
              width: 360,
              height: 360,
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: theme.palette.grey[200],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: theme.custom.shadow,
              transition: "box-shadow 0.3s",
            }}
          >
            <img
              src="/portfolio-picture.png"
              alt="Profile Picture"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          {/* Main Content Box with floating effect */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 160,
              boxShadow: theme.custom.shadow,
              borderRadius: 4,
              backgroundColor: theme.palette.secondary.main,
              transition: "box-shadow 0.3s",
            }}
          >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography sx={{ color: theme.custom.text }} variant="h2" >
                    Asaf Zafrir
                </Typography>
                <Typography sx={{ color: theme.custom.text }} variant="body1" >
                    Hello! 👋 <br />
                    I'm a Software Engineer (B.Sc.) with hands-on experience in full-stack
                    <br />
                    development, automation, and system design. Skilled in building
                    <br />
                    scalable solutions using modern technologies and engineering
                    <br />
                    best practices. A quick learner and a strong team player with
                    <br />
                    interpersonal skills. Motivated with a strong result-focused
                    <br />
                    approach, a positive attitude, and dedication for excellence.
                </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default MainPage;
