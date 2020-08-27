import React, {  useState } from "react";
import { Box, IconButton, ButtonBase } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import ItemsCarousel from "react-items-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForward";
import Styles from "./Light-Box.styles";

const LightBox = (props) => {
  const classes = Styles;
  const { src, config } = props;
  const [slide, setSlide] = useState(0);

  const renderItemCarousel = (imgs, lightBoxConfig, classes) => {
    const { enableThumbs } = lightBoxConfig.carouselConfig;
    if (enableThumbs) {
      return (
        <div style={classes.itemsCarousel}>
          <ItemsCarousel
            activeItemIndex={slide}
            requestToChangeActive={(value) => setSlide(value)}
            rightChevron={
              <IconButton style={classes.chevron}>
                <ArrowForwardIosIcon />
              </IconButton>
            }
            leftChevron={
              <IconButton style={classes.chevron}>
                <ArrowBackIosIcon />
              </IconButton>
            }
            {...lightBoxConfig.itemCarouselConfig}
          >
            {imgs.map((img, index) => (
              <ButtonBase
                focusRipple
                key={index}
                onClick={() => setSlide(index)}
              >
                <img alt={img.alt} src={img.imgUrl} style={classes.item} />
              </ButtonBase>
            ))}
          </ItemsCarousel>
        </div>
      );
    }
  };

  const renderCarousel = (imgs, lightBoxConfig) => {
    console.log("current slide: ", slide);
    return (
      <Carousel
        {...lightBoxConfig.carouselConfig}
        selectedItem={slide}
        onChange={setSlide}
        showThumbs={false}
      >
        {imgs.map((img) => {
          const { alt, imgUrl, imgLargeUrl } = img;
          return <img key={imgLargeUrl} alt={alt} src={imgUrl} />;
        })}
      </Carousel>
    );
  };

  return (
    <Box style={classes.root}>
      {renderCarousel(src, config, classes)}
      {renderItemCarousel(src, config, classes)}
    </Box>
  );
};

export default LightBox;
