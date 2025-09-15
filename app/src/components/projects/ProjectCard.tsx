import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { ProjectCardProps } from "../../types/project";
import { useTheme } from "@mui/material/styles";
import { usePicture } from "../../hooks/usePicture";

const ProjectCard = ({ name, shortDesc, image, onClick }: ProjectCardProps) => {
  const theme = useTheme();
  const { src, onError } = usePicture(image.name, image.ext, "/fallback.png");

  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        height: 300,
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        background: theme.palette.secondary.main,
        boxShadow: theme.custom.shadow,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: theme.custom.shadow + "60px",
        },
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt={image.alt}
        onError={onError}
        sx={{ height: image.height || 180, objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
          noWrap
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: theme.palette.text.primary,
          }}
          noWrap
        >
          {shortDesc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
