import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLanguage } from "../context/LanguageContext";
import { useDownloadAsset } from "../hooks/useDownloadAsset";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import DescriptionIcon from "@mui/icons-material/Description";

const LinksStack = () => {
  const theme = useTheme();
  const { data } = useLanguage();

  const downloadResume = useDownloadAsset("docs/Asaf Zafrir - CV.pdf", "Asaf Zafrir - CV.pdf");

  const isRtl = data.direction === "rtl";

  const orderedIcons = (() => {
    const baseIcons = [
      {
        elements: null,
        icon: <GitHubIcon key="icon-github" />,
        url: data.links.github.url,
      },
      {
        elements: null,
        icon: <LinkedInIcon key="icon-linkedin" />,
        url: data.links.linkedin.url,
      },
      {
        elements: null,
        icon: <InstagramIcon key="icon-instagram" />,
        url: data.links.instagram.url,
      },
      {
        elements: null,
        icon: <DescriptionIcon key="icon-description" />,
        download: downloadResume,
        text: data.links.resume,
      },
    ];

    const icons = isRtl ? [...baseIcons].reverse() : baseIcons;

    return icons.map((item) => {
      if (item.text) {
        const elements = isRtl
          ? [
              <Typography key="text" variant="caption">
                {item.text}
              </Typography>,
              item.icon,
            ]
          : [
              item.icon,
              <Typography key="text" variant="caption">
                {item.text}
              </Typography>,
            ];
        return { ...item, elements };
      }
      return item;
    });
  })();

  return (
    <Box sx={{ mt: 2, display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isRtl ? "row-reverse" : "row",
          gap: 1,
        }}
      >
        {orderedIcons.map((item, idx) => {
          return (
            <IconButton
              key={idx}
              component={item.download ? "button" : "a"}
              onClick={item.download ? item.download : undefined}
              href={!item.download ? item.url : undefined}
              target={!item.download ? "_blank" : undefined}
              sx={{
                color: theme.custom.text,
                ":hover": { color: theme.custom.button.hoverColor },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: isRtl ? "row-reverse" : "row",
                  gap: 0.5,
                }}
              >
                {item.elements ? item.elements : item.icon}
              </Box>
            </IconButton>
          );
        })}
      </Box>
    </Box>
  );
};
export default LinksStack;
