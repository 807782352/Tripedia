import { Box, Typography } from "@mui/material";
import ThemeTag from "../../components/ThemeTag";
import { themeTags } from "../../data/spots";

const FeaturedThemes = () => {
  return (
    <Box>
      <Typography
        component={"h2"}
        variant={"h4"}
        color={"primary"}
        align="center"
        mt={16}
      >
        Featured Themes
      </Typography>

      {/* Theme */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          placeItems: "center",
          gap: {
            xs: 0,
            sm: 1,
            md: 2,
            lg: 2,
          },
          mt: 4,
        }}
      >
        {themeTags.map((themeTag) => (
          <ThemeTag themeTag={themeTag} key={themeTag.title} />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedThemes;
