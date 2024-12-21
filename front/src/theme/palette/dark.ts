import { PaletteOptions } from "@mui/material/styles";

export enum DarkColors {
  Primary = "#2b2b35",
  Error = "#de5354",
  Success = "#59be9c",
  Warning = "#f4b556",
  Info = "#4faef8",
  CustomColor = "#191b27",
  TextColor = "#ffffff",
  PageBackground = "#191b28",
}

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#0096FB",
  },
  secondary: {
    main: "#ab47bc",
    contrastText: "#ffffff",
  },
  info: {
    main: "#29b6f6",
    contrastText: "#ffffff",
  },
  error: {
    main: "#f44336",
  },
  success: {
    main: "#31AD8E",
  },
  divider: "rgba(255, 255, 255, 0.5)",
  text: {
    primary: "#f5f5f8",
    secondary: "rgba(255, 255, 255, 0.8)",
  },
  background: {
    default: "#1D2127",
    paper: "#252930",
  },
};
