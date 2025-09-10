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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 28%" },
              aspectRatio: "1 / 1",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: theme.custom.shadow,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: theme.custom.shadow + "90px",
              },
            }}
          >
            <img
              src="/portfolio-picture.png"
              alt="Asaf Zafrir"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 70%" },
              backgroundColor: theme.palette.secondary.main,
              p: { xs: 4, md: 5 },
              borderRadius: 4,
              boxShadow: theme.custom.shadow,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: theme.custom.shadow + "60px",
              },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{ mb: 2, fontWeight: "bold", color: theme.custom.text }}
            >
              Asaf Zafrir
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{ mb: 3, color: theme.palette.grey[200] }}
            >
              Software Engineer | Full Stack Developer
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ lineHeight: 1.7, color: theme.custom.text }}
            >
              Hello! 👋 I'm a Software Engineer (B.Sc.) with hands-on experience
              in full-stack development, automation, and system design. Skilled
              in building scalable solutions using modern technologies and
              engineering best practices. A quick learner and a strong team
              player with interpersonal skills. Motivated with a strong
              result-focused approach, a positive attitude, and dedication for
              excellence.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default MainPage;
