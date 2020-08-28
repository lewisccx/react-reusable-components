//Libraries
import React, { useState } from "react";
//Components
import { Box, IconButton, ButtonBase } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForward";
import { Carousel } from "react-responsive-carousel";
import { Magnifier,TOUCH_ACTIVATION, MOUSE_ACTIVATION } from "react-image-magnifiers";
import ItemsCarousel from "react-items-carousel";
//CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Styles from "./Light-Box.styles";

import PropTypes from "prop-types";


const LightBox = (props) => {
  const classes = Styles;
  const { src, config } = props;
  const [slide, setSlide] = useState(0);

  const renderItemCarousel = (imgs, lightBoxConfig, classes) => {
    const { enableThumbs } = lightBoxConfig.carouselConfig;
    if (enableThumbs) {
      return (
        <Box style={classes.itemsCarousel}>
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
                <img style={classes.item} alt={img.alt} src={img.imgUrl} />
              </ButtonBase>
            ))}
          </ItemsCarousel>
        </Box>
      );
    }
  };

  const renderCarousel = (imgs, lightBoxConfig, classes) => {
    console.log("current slide: ", slide);

    return (
      <Box>
        <Carousel
          {...lightBoxConfig.carouselConfig}
          selectedItem={slide}
          onChange={setSlide}
          showThumbs={false}
        >
          {imgs.map((img) => {
            const { alt, imgUrl, imgLargeUrl } = img;

            // return <img key={imgLargeUrl} alt={alt} src={imgUrl} />;
            return (
              <Magnifier
                key={alt}
                className="input-position"
                imageSrc={imgUrl}
                largeImageSrc={imgLargeUrl}
                {...lightBoxConfig.magnifierConfig}
              />
            );
          })}
        </Carousel>
        {renderItemCarousel(src, config, classes)}
      </Box>
    );
  };

  return renderCarousel(src, config, classes);
};

LightBox.propTypes = {
  src: PropTypes.arrayOf(PropTypes.object).isRequired,

  config: PropTypes.shape({
    magnifierConfig: PropTypes.shape({
      mouseActivation: PropTypes.oneOf([
        MOUSE_ACTIVATION.CLICK,
        MOUSE_ACTIVATION.DOUBLE_CLICK,
      ]),
      touchActivation: PropTypes.oneOf([
        TOUCH_ACTIVATION.DOUBLE_TAP,
        TOUCH_ACTIVATION.LONG_TOUCH,
        TOUCH_ACTIVATION.TAP,
      ]),
      dragToMove: PropTypes.bool,
    }),
    itemCarouselConfig: PropTypes.shape({
      numberOfCards: PropTypes.number,
      infiniteLoop: PropTypes.bool,
      gutter: PropTypes.number,
      showSlither: PropTypes.bool,
      firstAndLastGutter: PropTypes.bool,
      activePosition: PropTypes.oneOf(["left", "center", "right"]),
      chevronWidth: PropTypes.number,
      outsideChevron: PropTypes.bool,
      alwaysShowChevrons: PropTypes.bool,
      slidesToScroll: PropTypes.number,
      disableSwipe: PropTypes.bool,
    }),
    carouselConfig: PropTypes.shape({
      showArrows: PropTypes.bool,
      showStatus: PropTypes.bool,
      showIndicators: PropTypes.bool,
      infiniteLoop: PropTypes.bool,
      showThumbs: PropTypes.bool,
      autoPlay: PropTypes.bool,
      stopOnHover: PropTypes.bool,
      swipeable: PropTypes.bool,
      emulateTouch: PropTypes.bool,
      thumbWidth: PropTypes.number,
      selectedItem: PropTypes.number,
      interval: PropTypes.number,
      transitionTime: PropTypes.number,
    }),
  }),
};

LightBox.defaultProps = {
  magnifierConfig: PropTypes.shape({
    mouseActivation: MOUSE_ACTIVATION.CLICK,
    touchActivation: TOUCH_ACTIVATION.TAP,
    dragToMove: true,
  }),
  itemCarouselConfig: PropTypes.shape({
    numberOfCards: 3,
    infiniteLoop: false,
    gutter: 0,
    showSlither: false,
    firstAndLastGutter: false,
    activePosition: "left",
    chevronWidth: 0,
    outsideChevron: false,
    alwaysShowChevrons: false,
    slidesToScroll: 1,
    disableSwipe: false,
  }),
  lightBoxConfig: PropTypes.shape({
    carouselConfig: PropTypes.shape({
      showArrows: true,
      showStatus: true,
      showIndicators: true,
      infiniteLoop: true,
      showThumbs: true,
      autoPlay: true,
      stopOnHover: true,
      swipeable: true,
      emulateTouch: true,
      thumbWidth: 100,
      selectedItem: 0,
      interval: 3000,
      transitionTime: 150,
    }),
  }),
};

export default LightBox;
