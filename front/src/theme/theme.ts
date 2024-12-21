import { createTheme } from "@mui/material/styles";
import { lightPalette } from "./palette/light";

export const theme = createTheme({
  // cssVariables: {
  //   colorSchemeSelector: "data-toolpad-color-scheme",
  // },
  palette: lightPalette,
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
