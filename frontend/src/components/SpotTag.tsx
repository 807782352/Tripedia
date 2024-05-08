import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const SpotTag: React.FC<HotSpotProps> = ({ hotSpot }) => {
  return (
    <div>
      <Paper
        key={hotSpot.name}
        elevation={0}
        sx={{
          marginY: "1rem",
          borderRadius: "1rem",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "7rem",
            backgroundImage: `url("${hotSpot.imgPath}")`,
            backgroundSize: "cover",
            backgroundPosition: "center 15%",

            filter: "grayscale(30%) blur(1px)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              filter: "grayscale(0%) blur(0px)",
              transform: "scale(1.1)",
            },
            borderRadius: "1rem",
          }}
        ></Box>
        <Typography
          component="h2"
          variant="h5"
          color="primary.contrastText"
          sx={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",  // make text in the center 
            pointerEvents: "none", // The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
          }}
        >
          {hotSpot.name}
        </Typography>
      </Paper>
    </div>
  );
};

export default SpotTag;
