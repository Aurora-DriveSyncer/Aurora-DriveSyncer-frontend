import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    cursor: "default",
  },
  fileInfoWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  fileName: {
    margin: 0,
    padding: 0,
    marginRight: "30px",
    width: "200px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  fileSize: {
    margin: 0,
    padding: 0,
    fontSize: "0.8em",
    opacity: 0.5,
  },
  fileStatus: {
    margin: 0,
    padding: 0,
    marginLeft: "30px",
    // padding: "3px 5px",
    fontWeight: 700,
    // backgroundColor: "#3c8039",
    // color: "#fff",
    // borderRadius: "5px",
    color: "#3c8039",
  },
  progress: {
    // width: "100%",
    // marginLeft: "30px",
    flex: 1,
    // backgroundColor: "#3c8039",
  },
  colorPrimary: { backgroundColor: "#b2dfdb" },
  barColorPrimary: { backgroundColor: "#3c8039" },
}));

function UploadingTask(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.fileInfoWrapper}>
        <p
          className={classes.fileName}
          style={{ fontWeight: 700 }}
          title={props.filename}
        >
          {props.filename}
        </p>
        <p className={classes.fileSize}>{props.filesize}</p>
      </div>
      <p className={classes.fileName} title={props.filepath}>
        {props.filepath}
      </p>
      <LinearProgress
        className={classes.progress}
        color="primary"
        classes={{
          colorPrimary: classes.colorPrimary,
          barColorPrimary: classes.barColorPrimary,
        }}
      />
      <p className={classes.fileStatus}>{props.filestatus}</p>
    </div>
  );
}
export default UploadingTask;
