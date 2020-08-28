const Styles = {
  baseStyle: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
    width:"100%"
  },

  activeStyle: {
    borderColor: "#2196f3",
  },

  acceptStyle: {
    borderColor: "#00e676",
  },

  rejectStyle: {
    borderColor: "#ff1744",
  },
  thumbsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    width: "100%",
  },

  thumb: {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  },

  thumbInner: {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  },

  img: {
    display: "block",
    width: "auto",
    height: "100%",
  },
};

export default Styles;
