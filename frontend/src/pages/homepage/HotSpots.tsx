import React from "react";
import SpotTag from "../../components/SpotTag";
import { Box, Button, Typography } from "@mui/material";
import { hotSpotTags } from "../../data/spots";

const HotSpots = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "6px",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          color="primary.main"
          sx={{ textTransform: "uppercase" }}
        >
          Hottest Spots
        </Typography>
        <Button
          variant="text"
          sx={{ color: "primary.dark", fontSize: "0.7rem" }}
        >
          Learn More
        </Button>
      </Box>

      {hotSpotTags.map((hotSpotTag) => (
        <SpotTag hotSpot={hotSpotTag} key={hotSpotTag.name} />
      ))}
    </div>
  );
};

export default HotSpots;
