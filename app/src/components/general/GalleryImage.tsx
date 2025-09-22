// GalleryImage.tsx
import { CardMedia } from "@mui/material";
import { usePicture } from "../../hooks/usePicture";
import { useGalleryModal } from "./GalleryModalContext";

type GalleryImageProps = {
  name: string;
  ext: string;
  alt?: string;
};

const GalleryImage = ({ name, ext, alt }: GalleryImageProps) => {
  const { src, onError } = usePicture(name, ext, "/fallback.png");
  const { openModal } = useGalleryModal();

  return (
    <CardMedia
      component="img"
      image={src}
      alt={alt}
      onError={onError}
      sx={{
        height: 300,
        flexShrink: 0,
        borderRadius: 2,
        scrollSnapAlign: "start",
        objectFit: "cover",
        cursor: "pointer",
      }}
      onClick={() => openModal(src)}
    />
  );
};

export default GalleryImage;
