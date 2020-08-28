import React, { useState, useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import Styles from "./ImageUploaderStyles";
import { Button, Box } from "@material-ui/core";
import LightBox from "../reusables/Light-Box";
import LightBoxConfig from "./LightBoxMockConfig";

const ImageUploader = (props) => {
  const [files, setFiles] = useState([]);
  const classes = Styles;
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,

    open,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const style = useMemo(
    () => ({
      ...classes.baseStyle,
      ...(isDragActive ? classes.activeStyle : {}),
      ...(isDragAccept ? classes.acceptStyle : {}),
      ...(isDragReject ? classes.rejectStyle : {}),
    }),
    [isDragActive, isDragReject, classes, isDragAccept]
  );
//   const thumbs = files.map((file) => (
//     <div style={classes.thumb} key={file.name}>
//       <div style={classes.thumbInner}>
//         <img src={file.preview} style={classes.img} />
//       </div>
//     </div>
//   ));
  const generateLightBox = (
    <LightBox src={files} config={LightBoxConfig.LightBoxConfig2} />
  );

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <Box>
      <Box {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <Button type="button" onClick={open}>
          Open File Dialog
        </Button>
      </Box>
      {/* <Box style={classes.thumbsContainer}>{thumbs}</Box> */}
      <Box >
        {files.length > 0 ? generateLightBox : null}
      </Box>
    </Box>
  );
};

export default ImageUploader;
