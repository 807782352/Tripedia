import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#43a047",
      light: "#e8f5e9",
      dark: "#1b5e20",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "#fdd835",
      light: "#fff9c4",
      dark: "#f57f17",
    },
    background: {
      default: "#f1f8e9",
    },
  },
});
