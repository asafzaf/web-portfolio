import { Box } from "@mui/material";
import GalleryImage from "./GalleryImage";

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
      {images.map((img, idx) => (
        <GalleryImage key={idx} name={img.name} ext={img.ext} alt={img.alt} />
      ))}
    </Box>
  );
};

export default HorizontalGallery;
