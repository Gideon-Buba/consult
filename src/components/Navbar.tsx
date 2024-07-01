import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import logo from "../assets/consult-logo.png"; // Adjust the path as necessary

const ToolbarStyled = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 80,
});

const LogoDiv = styled("div")({
  display: "flex",
  alignItems: "center",
});

const NavLinksContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexGrow: 1,
});

const NavLinks = styled("div")({
  display: "flex",
  gap: "1rem",
});

const NavButton = styled(Button)({
  color: "#6C6C6C",
});

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "none",
        height: 99,
      }}
    >
      <ToolbarStyled>
        <LogoDiv>
          <img src={logo} alt="Logo" height="40" />
        </LogoDiv>
        <NavLinksContainer>
          <NavLinks>
            <NavButton>About us</NavButton>
            <NavButton>How we work</NavButton>
            <NavButton>Pricing</NavButton>
            <NavButton>Contact us</NavButton>
          </NavLinks>
        </NavLinksContainer>
      </ToolbarStyled>
    </AppBar>
  );
};

export default Navbar;
