import React from "react";
import Navbar from "./components/menu/Navbar";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "./index.css";
import { GridCard } from "./components/GridCard"

const Demo = () => {
  return (
        <ThemeProvider theme={theme}>
      <CssBaseline />
          <Navbar />
      <Container >
          <GridCard />
      </Container>
          </ThemeProvider>
  );
};

export default Demo;
