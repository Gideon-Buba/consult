import React from "react";
import { Container } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
      </Container>
      <Hero />
    </div>
  );
}

export default App;
