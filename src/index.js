import { ThemeProvider } from "@mui/material";
import reactDOM from "react-dom";
import App from "./App";
import { theme } from "./theme";

reactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
