import { Box, Stack, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import DescriptionIcon from "@mui/icons-material/Description";

const LinksStack = () => {
  const theme = useTheme();
  const { data } = useLanguage();

  return (
    <Box sx={{ mt: 2, display: "flex" }}>
      <Stack
        direction={data.direction === "rtl" ? "row-reverse" : "row"}
        spacing={2}
      >
        <IconButton
          component="a"
          href={data.links.github.url}
          target="_blank"
          sx={{
            color: theme.custom.text,
            ":hover": { color: theme.custom.button.hoverColor },
          }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href={data.links.linkedin.url}
          target="_blank"
          sx={{
            color: theme.custom.text,
            ":hover": { color: theme.custom.button.hoverColor },
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href={data.links.instagram.url}
          target="_blank"
          sx={{
            color: theme.custom.text,
            ":hover": { color: theme.custom.button.hoverColor },
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          target="_blank"
          sx={{
            color: theme.custom.text,
            ":hover": { color: theme.custom.button.hoverColor },
          }}
        >
          {data.direction === "rtl" ? (
            <>
              <Typography variant="caption" sx={{ ml: 0.5 }}>
                {data.links.resume}
              </Typography>
              <DescriptionIcon />
            </>
          ) : (
            <>
              <DescriptionIcon />
              <Typography variant="caption" sx={{ ml: 0.5 }}>
                {data.links.resume}
              </Typography>
            </>
          )}
        </IconButton>
      </Stack>
    </Box>
  );
};
export default LinksStack;
