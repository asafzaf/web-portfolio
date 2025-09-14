import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { usePicture } from "../../hooks/usePicture";

export const ProjectCard = ({
  name,
  shortDesc,
  picture,
  onClick,
}: ProjectCardProps) => {
  const { src, onError } = usePicture(`${picture}`, "jpg", "/fallback.png");

  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        height: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={src}
        onError={onError}
        sx={{ height: 180, objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" noWrap>
          {name}
        </Typography>
        <Typography variant="body2" noWrap>
          {shortDesc}
        </Typography>
      </CardContent>
    </Card>
  );
};
