import React, { Component } from "react";
import { Box } from "@material-ui/core";

import LightBox from "./../reusables/Light-Box";
import ImgSet from "./LightBoxMockData";
import LightBoxConfig from "./LightBoxMockConfig";
import Styles from "./LightBoxMockStyles";
import ImageUploader from "./ImageUploader";

class LightBoxExample extends Component {
  render() {
    const classes = Styles;
    return (
      <Box style={classes.root}>
        <Box style={classes.container}>
          <LightBox
            src={ImgSet.imgSet2}
            config={LightBoxConfig.LightBoxConfig2}
          />
        </Box>
        <Box>
          <ImageUploader />
        </Box>
      </Box>
    );
  }
}

export default LightBoxExample;
