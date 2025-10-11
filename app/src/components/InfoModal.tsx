import { Modal, Box, Button, useTheme, Typography } from "@mui/material";
import HorizontalGallery from "./general/HorizontalGallery";
import { useLanguage } from "../context/LanguageContext";
import LinksList from "./info/linksList";

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
              name: "web-portfolio-first-design",
              ext: "png",
              alt: "A screenshot of the web portfolio first design in Figma",
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
        <LinksList
          title={data.infoModal.linksTitle || "Links"}
          links={data.infoModal.links || []}
        />
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
