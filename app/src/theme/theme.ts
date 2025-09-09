// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#213555" },
    background: { default: "#F8FAFC" },
    text: { primary: "#9AA6B2" },
  },
  custom: {
    background: "#F8FAFC",
    text: "#9AA6B2",
    accent: "#D9EAFD",
    button: {
      color: "#213555",
      hoverBackground: "#B6C9E2",
      hoverColor: "#213555",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#F5EFE7" },
    background: { default: "#213555" },
    text: { primary: "#F5EFE7" },
  },
  custom: {
    background: "#213555",
    text: "#F5EFE7",
    accent: "#3E5879",
    button: {
      color: "#F5EFE7",
      hoverBackground: "#4A6487",
      hoverColor: "#F5EFE7",
    },
  },
});
