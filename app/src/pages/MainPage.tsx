import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const MainPage = () => {
  const theme = useTheme();

  return (
    <Box
      minHeight="100vh"
      minWidth="100vw"
      sx={{
        backgroundColor: theme.custom.background,
        color: theme.custom.text,
      }}
    >
      <NavBar />
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
