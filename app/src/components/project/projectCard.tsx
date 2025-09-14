import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { ProjectCardProps } from "../../types/project";
import { useTheme } from "@mui/material/styles";
import { usePicture } from "../../hooks/usePicture";

export const ProjectCard = ({
  name,
  shortDesc,
  picture,
  onClick,
}: ProjectCardProps) => {
  const theme = useTheme();
  const { src, onError } = usePicture(
    picture.name,
    picture.ext,
    "/fallback.png"
  );

  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        height: 300,
        display: "flex",
        flexDirection: "column",
        background: theme.palette.secondary.main,
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt={picture.alt}
        onError={onError}
        sx={{ height: picture.height || 180, objectFit: "cover" }}
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
