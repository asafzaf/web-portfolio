import { Modal, Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { ProjectModalProps } from "../../types/project";
import HorizontalGallery from "../general/HorizontalGallery";

const ProjectModal = ({ project, savedWords, onClose }: ProjectModalProps) => {
  const theme = useTheme();

  const galleryImages = project
    ? [
        {
          name: project.image?.name ?? "",
          ext: project.image?.ext ?? "",
          alt: project.image?.alt ?? "",
        },
        ...(project.gallery || []),
      ]
    : [];

  if (!project) return null;

  // Prepare gallery images (filter out invalid ones)

  return (
    <Modal open={!!project} onClose={onClose}>
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
        {/* Title */}
        <Typography
          variant="h4"
          color={theme.palette.text.secondary}
          gutterBottom
        >
          {project.title}
        </Typography>

        {/* Main Image */}
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 300,
          }}
        >
          <Box
            sx={{
              mb: 2,
              overflowY: "auto", // vertical scroll
              overflowX: "hidden", // prevent horizontal scroll
            }}
          >
            {galleryImages.length > 0 && (
              <HorizontalGallery images={galleryImages} />
            )}
          </Box>
        </Box>

        {/* Description, Date, Categories */}
        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          sx={{ mb: 2 }}
        >
          {project.description}
        </Typography>

        {/* Gallery & Links */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            {project.date && (
              <Typography
                variant="body2"
                color={theme.palette.text.secondary}
                sx={{ mb: 1 }}
              >
                <strong>{savedWords.date}:</strong> {project.date}
              </Typography>
            )}
            {project.categories?.length > 0 && (
              <Typography
                variant="body2"
                color={theme.palette.text.secondary}
                sx={{ mb: 3 }}
              >
                <strong>{savedWords.categories}:</strong>{" "}
                {project.categories.join(", ")}
              </Typography>
            )}
            {}
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              color={theme.palette.text.secondary}
              gutterBottom
            >
              {savedWords.links}
            </Typography>
            <Box display={"flex"} flexDirection="column" gap={1}>
              {project.links && project.links.length > 0 ? (
                project.links.map((link, idx) => (
                  <Button
                    key={idx}
                    component="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                  >
                    {link.label}
                  </Button>
                ))
              ) : (
                <Typography
                  variant="body2"
                  color={theme.palette.text.secondary}
                >
                  {savedWords.noLinks}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Close Button */}
        <Button
          variant="text"
          sx={{ ...theme.custom.button, mt: 2 }}
          onClick={onClose}
        >
          {savedWords.close}
        </Button>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
