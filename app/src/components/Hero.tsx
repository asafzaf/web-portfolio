import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinksStack from "./LinksStack";

const Hero = () => {
  const theme = useTheme();

  return (
    <section style={{ minHeight: "100vh", padding: "5rem 3rem" }}>
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
            backgroundColor: theme.absolutColors.white,
            transition: "transform 0.3s, box-shadow 0.3s",
            "& img": {
              width: "100%",
              height: "100%",
              position: "relative",
              top: 30,
              zIndex: 1,
              objectFit: "cover",
              transform: "scale(1.05)",
              transition: "transform 0.5s",
            },
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
            sx={{ mb: 3, fontWeight: "bold", color: theme.custom.text }}
          >
            Software Engineer | Full Stack Developer
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ lineHeight: 1.7, color: theme.custom.text }}
          >
            Hello! 👋 I'm a Software Engineer (B.Sc.) with hands-on experience
            in full-stack development, automation, and system design. Skilled in
            building scalable solutions using modern technologies and
            engineering best practices. A quick learner and a strong team player
            with interpersonal skills. Motivated with a strong result-focused
            approach, a positive attitude, and dedication for excellence.
          </Typography>
          <LinksStack />
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
