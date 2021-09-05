import React from "react";
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
import UploadingTask from "../components/UploadingTask";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  title: {
    // fontWeight: 400,
    // margin: "20px",
    width: "90%",
    margin: "20px auto",
  },
  wrapper: {
    padding: "0 20px",
    position: "absolute",
    top: "64px",
    left: 0,
    bottom: 0,
    width: "100%",
    boxSizing: "border-box",
    overflowX: "hidden",
    overflowY: "auto",
  },
}));

function SyncSetter() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>上传管理</h3>
      <UploadingTask
        filename="file"
        filesize="200KB"
        filepath="/Material-ui/component/progress"
        filestatus="syncing"
      />
      <UploadingTask
        filename="filefilefilefile"
        filesize="200KB"
        filepath="/Material-ui/component/progress"
        filestatus="syncing"
      />
      <UploadingTask
        filename="file03"
        filesize="20000MB"
        filepath="/Material-ui/progress"
        filestatus="waiting"
      />
      <UploadingTask
        filename="file12345"
        filesize="200KB"
        filepath="/Materialui/component/progress/whatever/whatever/whatever"
        filestatus="waiting"
      />
      <UploadingTask
        filename="hello-world"
        filesize="20B"
        filepath="/Material-ui/component/progress/hello"
        filestatus="waiting"
      />
      <UploadingTask
        filename="file"
        filesize="200KB"
        filepath="/Material-ui/component/progress"
        filestatus="waiting"
      />
      <UploadingTask
        filename="file"
        filesize="200KB"
        filepath="/Material-ui/component/progress"
        filestatus="syncing"
      />
      <UploadingTask
        filename="filefilefilefile"
        filesize="200KB"
        filepath="/Material-ui/component/progress"
        filestatus="syncing"
      />
      <UploadingTask
        filename="file03"
        filesize="20000MB"
        filepath="/Material-ui/progress"
        filestatus="waiting"
      />
      <UploadingTask
        filename="file12345"
        filesize="200KB"
        filepath="/Materialui/component/progress/whatever/whatever/whatever"
        filestatus="waiting"
      />
      <UploadingTask
        filename="hello-world"
        filesize="20B"
        filepath="/Material-ui/component/progress/hello"
        filestatus="waiting"
      />
      <UploadingTask
        filename="file"
        filesize="200KB"
        filepath="/Material-ui/component/progress"
        filestatus="waiting"
      />
      <UploadingTask
        filename="file"
        filesize="200KB"
        filepath="/Material-ui/component/progress"
        filestatus="syncing"
      />
      <UploadingTask
        filename="filefilefilefile"
        filesize="200KB"
        filepath="/Material-ui/component/progress"
        filestatus="syncing"
      />
      <UploadingTask
        filename="file03"
        filesize="20000MB"
        filepath="/Material-ui/progress"
        filestatus="waiting"
      />
      <UploadingTask
        filename="file12345"
        filesize="200KB"
        filepath="/Materialui/component/progress/whatever/whatever/whatever"
        filestatus="waiting"
      />
      <UploadingTask
        filename="hello-world"
        filesize="20B"
        filepath="/Material-ui/component/progress/hello"
        filestatus="waiting"
      />
      <UploadingTask
        filename="file"
        filesize="200KB"
        filepath="/Material-ui/component/progress"
        filestatus="waiting"
      />
    </div>
  );
}
export default SyncSetter;
