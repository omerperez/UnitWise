import { PaletteOptions } from "@mui/material/styles";

export enum LightColors {
  Primary = "#0080ff",
  Error = "#d72e21",
  Success = "#53af7e",
  Warning = "#f19e37",
  Info = "#274ad9",
  Main = "#f4f7fe",
  CustomColor = "#1650b5",
  TextColor = "#191b27",
  PageBackground = "#ffffff",
}

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#0080ff",
  },
  secondary: {
    main: "rgba(255, 255, 255, 0.7)",
  },
  info: {
    main: "#274ad9",
  },
  error: {
    main: "#d72e21",
  },
  warning: {
    main: "#f19e37",
  },
  success: {
    main: "#53af7e",
  },
  divider: "rgba(255, 255, 255, 0.7)",
  text: {
    primary: "#191b27",
  },
  background: {
    default: "#F2F5F8",
    paper: "#ffffff",
  },
};
