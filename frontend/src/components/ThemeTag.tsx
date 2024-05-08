import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const ThemeTag: React.FC<ThemeTagsProps> = ({ themeTag }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        width: 200,
        height: 200,
        marginY: "1rem",
        borderRadius: "1rem",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundImage: `url("${themeTag.imgPath}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(30%)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            filter: "grayscale(0%) blur(0px)",
            transform: "scale(1.05)",
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
          flexWrap: "wrap",
          pointerEvents: "none", // The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.

          textAlign: "center", // Ensure text alignment is centered
          lineHeight: "normal", // Adjust the line height as needed to improve the display of multiline text
        }}
      >
        {themeTag.title}
      </Typography>
    </Paper>
  );
};

export default ThemeTag;
