import { Box, CircularProgress } from "@mui/material";
import { usePicture } from "../../hooks/usePicture";

interface HorizontalGalleryProps {
  images: { name: string; ext: string; alt?: string }[];
}

const HorizontalGallery = ({ images }: HorizontalGalleryProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        touchAction: "pan-x",
        gap: 1,
        pb: 1,
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {images.map((img, idx) => {
        const { src, loading } = usePicture(img.name, img.ext, "/fallback.png");

        if (!src) return null;

        return loading ? (
          <CircularProgress key={idx} />
        ) : (
          <Box
            key={idx}
            component="img"
            src={src}
            alt={img.alt}
            sx={{
              height: 300,
              flexShrink: 0,
              borderRadius: 2,
              scrollSnapAlign: "start",
              objectFit: "cover",
            }}
          />
        );
      })}
    </Box>
  );
};

export default HorizontalGallery;
