import React, { Component } from "react";
import { Box } from "@material-ui/core";

// import LightBox from "./../reusables/Light-Box";
// import ImgSet from "./LightBoxMockData";
// import LightBoxConfig from "./LightBoxMockConfig";
import Styles from "./LightBoxMockStyles";
import ImageUploader from "./ImageUploader";

class LightBoxExample extends Component {
  render() {
    const classes = Styles;
    return (
      <Box style={classes.root}>
      
          <ImageUploader />
        
      </Box>
    );
  }
}

export default LightBoxExample;
