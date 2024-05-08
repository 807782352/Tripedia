import { Box, Typography } from "@mui/material";
import SpotCard from "../../components/SpotCard";
import { spots } from "../../data/spots";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const TopPlaces = () => {
  return (
    <Box>
      <Typography
        component={"h2"}
        variant={"h4"}
        color={"primary"}
        align="center"
        mt={10}
      >
        Top Canadian Places in 2023
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: 2,
          marginTop: 4,
        }}
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          cardsEffect={{
            rotate: true, 
            slideShadows: true,
            perSlideOffset: 20,
            perSlideRotate: 4,
          }}
        >
          {spots.map((spot) => (
            <SwiperSlide key={spot.title}>
              <SpotCard spot={spot} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default TopPlaces;
