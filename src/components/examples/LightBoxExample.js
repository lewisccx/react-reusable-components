import React, { Component } from "react";
import { Box } from "@material-ui/core";
import LightBox from "./../reusables/Light-Box";
import ImgSet from "./LightBoxMockData";
import LightBoxConfig from "./LightBoxMockConfig";

import Styles from "./LightBoxMockStyles";

class LightBoxExample extends Component {
  render() {
    const classes = Styles;
    return (
      <Box style={classes.root}>
        <LightBox
          src={ImgSet.imgSet2}
          config={LightBoxConfig.LightBoxConfig2}
        />
      </Box>
    );
  }
}

export default LightBoxExample;
