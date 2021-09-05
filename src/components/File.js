import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import SyncIcon from "@material-ui/icons/Sync";
import SyncProblemIcon from "@material-ui/icons/SyncProblem";
import DoneIcon from "@material-ui/icons/Done";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "5px",
    paddingTop: "0",
    margin: "2px",
    width: "84px",
    height: "auto",
    cursor: "pointer",
  },
  wrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "5px",
    margin: "0 auto",
    "&:hover ": {
      backgroundColor: "rgba(204, 204, 204, 0.3)",
    },
  },
  folderIcon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    color: "rgb(255, 215, 101)",
  },
  fileIcon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    color: "lightgray",
    margin: "0 auto",
  },
  fileName: {
    margin: "0",
    height: "auto",
    textAlign: "center",
    fontSize: "16px",
    wordBreak: "break-all",
  },
  statusIcon: {
    position: "absolute",
    top: theme.spacing(6),
    right: theme.spacing(0.5),
    fontSize: "18px",
  },
  doneIcon: {
    color: "#3c8039",
  },
  syncIcon: {
    color: "#3c8039",
  },
  errIcon: {
    color: "red",
  },
}));

function File(props) {
  const classes = useStyles();
  const [icon, setIcon] = useState(<FolderIcon className={classes.fileIcon} />);
  const [statusIcon, setStatusIcon] = useState(
    <SyncIcon className={classes.statusIcon} />
  );
  useEffect(() => {
    switch (props.status) {
      case "done":
        setStatusIcon(
          <CheckCircleIcon
            className={classes.statusIcon + " " + classes.doneIcon}
          />
        );
        break;
      case "sync":
        setStatusIcon(
          <SyncIcon className={classes.statusIcon + " " + classes.syncIcon} />
        );
        break;
      default:
        setStatusIcon(
          <SyncProblemIcon
            className={classes.errIcon + " " + classes.statusIcon}
          />
        );
        break;
    }
  }, [props.status]);
  useEffect(() => {
    switch (props.type) {
      case "folder":
        setIcon(<FolderIcon className={classes.folderIcon} />);
        break;
      case "file":
        setIcon(<DescriptionOutlinedIcon className={classes.fileIcon} />);
        break;
    }
  }, [props.type]);
  return (
    <Paper className={classes.root} elevation={0}>
      <div className={classes.wrapper}>
        {icon}
        {statusIcon}
        <p className={classes.fileName}>{props.filename}</p>
      </div>
    </Paper>
  );
}
export default File;
