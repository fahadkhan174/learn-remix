import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    border: Palette["primary"];
    hover: Palette["primary"];
  }
  interface PaletteOptions {
    border: PaletteOptions["primary"];
    hover: PaletteOptions["primary"];
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      // main: "#556cd6",
      main: "#f6f8fa",
    },
    secondary: {
      // main: "#19857b",
      main: "#000000",
    },
    error: {
      main: red.A400,
    },
    border: {
      main: "#d0d7de",
    },
    hover: {
      main: '#eaeef2'
    }
  },
});

export default theme;
