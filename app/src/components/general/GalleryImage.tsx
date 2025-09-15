// GalleryImage.tsx
import { CardMedia } from "@mui/material";
import { usePicture } from "../../hooks/usePicture";

type GalleryImageProps = {
  name: string;
  ext: string;
  alt?: string;
};

const GalleryImage = ({ name, ext, alt }: GalleryImageProps) => {
  const { src, onError } = usePicture(name, ext, "/fallback.png");

  return (
    <CardMedia
      component="img"
      image={src}
      alt={alt}
      onError={onError}
      sx={{
        width: 100,
        height: 100,
        objectFit: "cover",
        borderRadius: 1,
      }}
    />
  );
};

export default GalleryImage;
