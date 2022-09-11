import "./App.sass";

import { Box, Container, CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Start, WhoWhenWhere } from "./Page";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box pt={20}>
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/who-whew-where" element={<WhoWhenWhere />} />
            </Routes>
          </Box>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
