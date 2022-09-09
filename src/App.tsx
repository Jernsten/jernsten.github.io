import "./App.sass";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, Container, CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Start, TheSituation } from "./Page";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box pt={20}>
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/the-situation" element={<TheSituation />} />
            </Routes>
          </Box>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
