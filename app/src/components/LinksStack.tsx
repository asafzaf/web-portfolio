import { Box, Stack, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import DescriptionIcon from "@mui/icons-material/Description";

const LinksStack = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 2 }}>
      <Stack direction="row" spacing={2}>
        <IconButton
          component="a"
          href="https://github.com/asafzaf"
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
          href="https://www.linkedin.com/in/asaf-zafrir/"
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
          href="https://www.instagram.com/asaf_z/"
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
          <DescriptionIcon />
          <Typography variant="caption" sx={{ ml: 0.5 }}>
            Resume
          </Typography>
        </IconButton>
      </Stack>
    </Box>
  );
};
export default LinksStack;
