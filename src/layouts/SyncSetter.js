import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
import UploadingTask from "../components/UploadingTask";
import service from "../utils/axios";
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
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    service
      .get("/api/syncing/")
      .then((res) => {
        const data = res.data;
        const temp = [];
        data.forEach((task) => {
          temp.push(
            <UploadingTask
              filename={task.filename}
              filesize={task.size}
              filepath={task.path}
              filestatus={task.status}
            />
          );
        });
        setTasks(temp);
      })
      .catch((err) => {
        alert(err.toString());
      });
  });
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>上传管理</h3>
      {tasks}
    </div>
  );
}
export default SyncSetter;
