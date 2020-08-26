import React, { Component } from "react";
import { Box, IconButton, ButtonBase } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import ItemsCarousel from "react-items-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForward";
import Styles from "./Light-Box.styles";

const LightBox = (props) => {
  class ExternalControlledCarousel extends Component {
    constructor(props) {
      super(props);

      this.state = {
        currentSlide: 0,
      };
    }

    updateCurrentSlide = (index) => {
      const { currentSlide } = this.state;

      if (currentSlide !== index) {
        this.setState({
          currentSlide: index,
        });
        console.log("updateCurrentSlide", currentSlide, index);
      }
    };
    renderItemCarousel = (imgs, lightBoxConfig, classes) => {
      if (lightBoxConfig.carouselConfig.enableThumbs) {
        const { currentSlide } = this.state;
        return (
          <div style={classes.itemsCarousel}>
            <ItemsCarousel
              activeItemIndex={currentSlide}
              requestToChangeActive={(value) =>
                this.setState({ currentSlide: value })
              }
              rightChevron={
                <IconButton>
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
                  onClick={() => this.updateCurrentSlide(index)}
                >
                  <img alt={img.alt} src={img.imgUrl} style={classes.item} />
                </ButtonBase>
              ))}
            </ItemsCarousel>
          </div>
        );
      }
    };
    // (value)=>this.setState({currentSlide:value})

    renderCarousel = (imgs, lightBoxConfig) => {
      const { currentSlide } = this.state;
      console.log("current slide: ", currentSlide);
      return (
        <Carousel
          selectedItem={currentSlide}
          onChange={this.updateCurrentSlide}
          {...lightBoxConfig.carouselConfig}
          showThumbs={false}
        >
          {imgs.map((img) => {
            const { alt, imgUrl, imgLargeUrl } = img;
            return <img key={imgLargeUrl} alt={alt} src={imgUrl} />;
          })}
        </Carousel>
      );
    };
    render() {
      const classes = Styles;
      const { src, config } = props;

      return (
        <Box>
          {this.renderCarousel(src, config, classes)}
          {this.renderItemCarousel(src, config, classes)}
        </Box>
      );
    }
  }
  return <ExternalControlledCarousel />;
};

export default LightBox;
