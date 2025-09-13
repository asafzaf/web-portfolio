import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinksStack from "./LinksStack";
import { useLanguage } from "../context/LanguageContext";
import { useAsset } from "../hooks/useAsset";

const Hero = () => {
  const theme = useTheme();
  const { data } = useLanguage();

  const { src, onError } = useAsset(
    "/portfolio-picture.png",
    "/fallback-image.png"
  );

  const alignSx = (dir: "ltr" | "rtl") => ({
    direction: dir,
    textAlign: dir === "rtl" ? "right" : "left",
  });

  return (
    <section
      style={{
        minHeight: "85vh",
        padding: "5rem 3rem",
      }}
    >
      <Box
        key={data.direction}
        sx={{
          ...alignSx(data.direction),
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
            src={src}
            alt={data.hero.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={onError}
          />
        </Box>
        <Box
          sx={{
            flex: { xs: "0 0 100%", md: "0 0 70%" },
            display: "flex",
            flexDirection: "column",
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
            sx={{
              ...alignSx(data.direction),
              mb: 2,
              fontWeight: "bold",
              color: theme.custom.text,
            }}
          >
            {data.hero.name}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              ...alignSx(data.direction),
              mb: 3,
              fontWeight: "bold",
              color: theme.custom.text,
            }}
          >
            {data.hero.title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              ...alignSx(data.direction),
              lineHeight: 1.7,
              color: theme.custom.text,
            }}
          >
            {data.hero.description}
          </Typography>
          <LinksStack />
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
