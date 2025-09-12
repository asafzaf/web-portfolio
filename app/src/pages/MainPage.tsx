import { useRef } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";

const MainPage = () => {
  const refs = {
    hero: useRef<HTMLDivElement | null>(null),
    skills: useRef<HTMLDivElement | null>(null),
    links: useRef<HTMLDivElement | null>(null),
  };

  const handleScrollTo = (section: keyof typeof refs) => {
    refs[section].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const theme = useTheme();

  return (
    <Box
      minHeight="100vh"
      minWidth="99vw"
      sx={{
        backgroundColor: theme.custom.background,
        color: theme.custom.text,
      }}
    >
      <NavBar onNavigate={handleScrollTo} />
      <Box
        sx={{
          pt: "80px",
          minHeight: `calc(95vh - 80px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div ref={refs.hero}>
          <Hero />
        </div>
        <div ref={refs.skills}>
          <Skills />
        </div>
      </Box>
    </Box>
  );
};
export default MainPage;
