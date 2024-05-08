import React from "react";
import Carousel from "../../components/Carousel";
import { Box, Container, Grid } from "@mui/material";
import HotSpots from "./HotSpots";
import HotPosts from "./HotPosts";
import { slides } from "../../data/slides.js";

const Home = () => {
  return (
    <Box sx={{ marginTop: "72px", borderTop: "2px solid white" }}>
      <Carousel slides={slides} />
      <Container maxWidth="lg">
        <Grid container columnSpacing={8} marginTop={6}>
          <Grid item xs={4} md={4}>
            <HotSpots />
          </Grid>
          <Grid item xs={8} md={8}>
            <HotPosts />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
