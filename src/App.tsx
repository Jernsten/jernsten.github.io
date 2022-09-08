import "./App.sass";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container, CssBaseline, Typography } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h1" align="center">
          Hej
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
