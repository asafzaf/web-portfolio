import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { Modal, Box } from "@mui/material";

interface GalleryModalContextType {
  openModal: (src: string) => void;
}

const GalleryModalContext = createContext<GalleryModalContextType | undefined>(undefined);

export const useGalleryModal = () => {
  const context = useContext(GalleryModalContext);
  if (!context) {
    throw new Error("useGalleryModal must be used within a GalleryModalProvider");
  }
  return context;
};

export const GalleryModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const openModal = (src: string) => {
    setImgSrc(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImgSrc(null);
  };

  return (
    <GalleryModalContext.Provider value={{ openModal }}>
      {children}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            outline: "none",
          }}
        >
          {imgSrc && (
            <img
              src={imgSrc}
              alt="Focused"
              style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: 8 }}
            />
          )}
        </Box>
      </Modal>
    </GalleryModalContext.Provider>
  );
};
