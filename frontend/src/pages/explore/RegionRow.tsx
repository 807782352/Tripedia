import { Box, Typography, Link } from "@mui/material";
import React from "react";

const RegionRow: React.FC<RegionRowProps> = ({
  country,
  province,
  regions,
}) => {
  const label = country ?? province ?? "Others";

  return (
    <Box sx={{}}>
      <Typography
        variant="h6"
        sx={{ color: (theme) => theme.palette.primary.dark }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0.5,
        }}
      >
        {regions.map((region, index) => (
          <Link
            key={index}
            href="#"
            color="inherit"
            underline="none"
            sx={{
              // display: "inline-flex",
              backgroundColor: (theme) => theme.palette.primary.light,
              padding: "4px 8px",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.secondary.light,
                color: (theme) => theme.palette.secondary.dark,
              },
            }}
          >
            <Typography component="span">{region}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default RegionRow;
