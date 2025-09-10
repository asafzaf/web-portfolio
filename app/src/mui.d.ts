// src/mui.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      background: string;
      text: string;
      accent: string;
      shadow: string;
      button: {
        color: string;
        hoverBackground: string;
        hoverColor: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      background?: string;
      text?: string;
      accent?: string;
      shadow?: string;
      button?: {
        color?: string;
        hoverBackground?: string;
        hoverColor?: string;
      };
    };
  }
}
