import {
  Modal,
  Box,
  Typography,
  CardMedia,
  Button,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePicture } from "../../hooks/usePicture";
import type { ProjectModalProps } from "../../types/project";

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const theme = useTheme();

  const { src, loading } = usePicture(
    project?.image.name || "",
    project?.image.ext || "",
    "/fallback.png"
  );

  if (!project) return null;

  return (
    <Modal open={!!project} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: 600 },
          bgcolor: theme.palette.background.paper,
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h4"
          color={theme.palette.text.secondary}
          gutterBottom
        >
          {project.title}
        </Typography>
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 300,
          }}
        >
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <CardMedia
              component="img"
              height={project.image?.height || 300}
              image={src}
              alt={project.image?.alt}
              sx={{ objectFit: "cover" }}
            />
          )}
        </Box>
        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          sx={{ mb: 2 }}
        >
          {project.shortDesc}
        </Typography>
        <Button
          variant="contained"
          sx={{ ...theme.custom.button }}
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
