import React from "react";
import { styled } from "@mui/system";
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const HeroSection = styled("section")({
  padding: "4rem 2rem",
  backgroundColor: "#F5EFE7",
});

const HeroHeading = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#222222",
  marginBottom: "1rem",
});

const HeroSubheading = styled(Typography)({
  fontSize: "1.25rem",
  color: "#333333",
  marginBottom: "2rem",
});

const CardStyled = styled(Card)({
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  height: "100%",
});

const CardMediaStyled = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%", // 16:9 aspect ratio
});

const CardContentStyled = styled(CardContent)({
  textAlign: "center",
});

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroHeading variant="h1">
        We help your <span style={{ color: "#E86A33" }}>business achieve</span>{" "}
        it’s full potential.
      </HeroHeading>
      <HeroSubheading variant="h2">
        Implement best practices for data management.
      </HeroSubheading>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <CardStyled>
            <CardMediaStyled
              image="path/to/image1.jpg" // Replace with your image path
              title="Data Strategy & Governance"
            />
            <CardContentStyled>
              <Typography variant="h6">Data Strategy & Governance</Typography>
              <Typography variant="body2">
                Implement best practices for data management.
              </Typography>
            </CardContentStyled>
          </CardStyled>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardStyled>
            <CardMediaStyled
              image="path/to/image2.jpg" // Replace with your image path
              title="Big Data & Cloud Computing"
            />
            <CardContentStyled>
              <Typography variant="h6">Big Data & Cloud Computing</Typography>
              <Typography variant="body2">
                Harness the power of big data and cloud technology.
              </Typography>
            </CardContentStyled>
          </CardStyled>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardStyled>
            <CardMediaStyled
              image="path/to/image3.jpg" // Replace with your image path
              title="Machine Learning"
            />
            <CardContentStyled>
              <Typography variant="h6">Machine Learning</Typography>
              <Typography variant="body2">
                Implement AI and machine learning solutions.
              </Typography>
            </CardContentStyled>
          </CardStyled>
        </Grid>
      </Grid>
    </HeroSection>
  );
};

export default Hero;
