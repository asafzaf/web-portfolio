import { Modal, Box, Button, useTheme, Typography } from "@mui/material";
import HorizontalGallery from "./general/HorizontalGallery";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router";

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
}

const InfoModal = ({ open, onClose }: InfoModalProps) => {
  const theme = useTheme();
  const { data } = useLanguage();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "60%", lg: "50%" },
          maxWidth: 1000,
          bgcolor: theme.custom.background,
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxHeight: "85vh",
          overflowY: "auto", // vertical scroll
          overflowX: "hidden", // prevent horizontal scroll
        }}
      >
        <Typography
          variant="h4"
          color={theme.palette.secondary.main}
          fontWeight={"bold"}
          component="h2"
        >
          {data.infoModal.title}{" "}
        </Typography>
        <HorizontalGallery
          images={[
            {
              name: "good-news-arch",
              ext: "png",
              alt: "A screenshot of the Good News Arch project page",
            },
          ]}
        />
        <Typography
          variant="body1"
          color={theme.palette.secondary.main}
          sx={{ mt: 2, whiteSpace: "pre-line" }}
        >
          {data.infoModal.content}
        </Typography>
        <Box sx={{ mt: 2 }} />
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h5"
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            component="h2"
          >
            Links
          </Typography>
          {data.infoModal.links?.map(
            (
              link: { title: string; description: string; url: string },
              idx: number
            ) => (
              <Box key={idx} sx={{ mt: 2 }}>
                <Link
                  to={link.url}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    mb={1}
                  >
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${
                        new URL(link.url).hostname
                      }&sz=32`}
                      alt={`${link.title} favicon`}
                      style={{ verticalAlign: "middle", marginRight: 8 }}
                    />
                    <Typography
                      variant="h6"
                      color={theme.palette.secondary.main}
                    >
                      {link.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.text.secondary}
                    >
                      {link.description}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            )
          )}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={onClose}>
            {data.infoModal.close}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default InfoModal;
