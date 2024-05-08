import { Box, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useState } from "react";

const Carousel: React.FC<CarouselProps> = ({ slides, height="70vh",  buttons=true, thumbnail=true }) => {
  const [curPage, setCurPage] = useState(0);

  const handleNext = () => {
    setCurPage((prevPage) => (prevPage + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurPage((prevPage) => (prevPage - 1 + slides.length) % slides.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        // marginTop: "2rem",
        // border: "4px red solid",
      }}
    >
      {/* Images */}
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${curPage * 100}%)`,
          width: "100%",
          height: "100%",
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "100%",
              flexShrink: 0,
              backgroundImage: `url(${slide.imgPath})`,
              backgroundSize: "cover",
              backgroundPosition: "center 60%",
            }}
          />
        ))}
      </Box>

      {buttons && (
        <>
          {/* Left Button */}
          <IconButton
            color="primary"
            sx={{
              position: "absolute",
              top: "50%",
              left: 32,
              transform: "translateY(-50%)",
              padding: 0.5,
              borderRadius: "50%",
              backgroundColor: "primary.light",
              zIndex: 2,
            }}
            onClick={handlePrev}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          {/* Right Button */}
          <IconButton
            color="primary"
            sx={{
              position: "absolute",
              top: "50%",
              right: 32,
              transform: "translateY(-50%)",
              padding: 0.5,
              borderRadius: "50%",
              backgroundColor: "primary.light",
              zIndex: 2,
            }}
            onClick={handleNext}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </>
      )}

      {/* thumbnail navigators */}

      {thumbnail && (
        <Box
          sx={{
            position: "absolute",
            // left: 0,
            top: "0",
            right: "10%", // 使用百分比或视口单位来实现响应式布局
            bottom: "0", // 调整导航器在轮播图内的位置
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: {
                xs: 0.5,
                md: 1,
                lg: 1.5,
              },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: {
                xs: "3rem",
                md: "5rem",
                lg: "6rem",
              },
              maxHeight: "2rem",
            }}
          >
            {slides.map((slide, index) => (
              <Box
                key={index}
                component="img"
                src={slide.imgPath}
                sx={{
                  width: "auto",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: curPage === index ? "" : "grayscale(70%)",
                  transition: "all 0.5s ease-in-out",
                  border: curPage === index ? "5px solid red" : "",
                }}
                onClick={() => setCurPage(index)}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Carousel;
