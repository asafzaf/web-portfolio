// src/theme.ts
import { createTheme } from "@mui/material/styles";

const lightPalette = {
  first: "#F9F7F7",
  second: "#DBE2EF",
  third: "#3F72AF",
  forth: "#112D4E",
};

const darkPalette = {
  first: "#222831",
  second: "#393E46",
  third: "#00ADB5",
  forth: "#EEEEEE",
};

const absolutColors = {
  white: "#FFFFFF",
  red: "#FF4C60",
  green: "#4CAF50",
  blue: "#2196F3",
  yellow: "#FFEB3B",
  orange: "#FF9800",
  purple: "#9C27B0",
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: lightPalette.forth },
    secondary: { main: lightPalette.third },
    background: { default: lightPalette.second },
    text: { primary: lightPalette.second, secondary: lightPalette.third },
  },
  custom: {
    background: lightPalette.first,
    text: lightPalette.second,
    accent: lightPalette.forth,
    shadow: "0 8px 32px 0 rgba(217, 234, 253, 0.18)",
    button: {
      color: lightPalette.forth,
      hoverBackground: lightPalette.third,
      hoverColor: lightPalette.forth,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
          "&:focus-visible": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
          "&:focus-visible": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
  absolutColors,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: darkPalette.forth },
    secondary: { main: darkPalette.third },
    background: { default: darkPalette.first },
    text: { primary: darkPalette.second , secondary: darkPalette.third },
  },
  custom: {
    background: darkPalette.first,
    text: darkPalette.second,
    accent: darkPalette.forth,
    shadow: "0 8px 32px 0 rgba(238, 236, 236, 0.18)",
    button: {
      color: darkPalette.forth,
      hoverBackground: darkPalette.third,
      hoverColor: darkPalette.second,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
          "&:focus-visible": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
          "&:focus-visible": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
  absolutColors,
});
