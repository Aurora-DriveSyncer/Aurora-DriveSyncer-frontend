import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { SettingContext } from "../App";

const usePathStyle = makeStyles((theme) => ({
  link: {
    color: "#3c8039",
    lineHeight: "30px",
    cursor: "pointer",
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function PathViewer() {
  const classes = usePathStyle();
  const { innerPath, setInnerPath } = useContext(SettingContext);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const temp = [];
    const parts = innerPath.split("/");
    console.log("pathviewer - " + parts);
    // const parts = "a/b/c/".split("/");
    parts.reduce((prev, cur, index) => {
      temp.push({
        path: prev + cur + "/",
        name: cur,
      });
    }, "");
    setLinks(temp);
  }, []);
  function handleClick(path) {
    return function () {
      setInnerPath(path);
    };
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {links.map((link, index) => {
        return <Typography color="textPrimary">{link.name}</Typography>;
      })}
    </Breadcrumbs>
  );
}
export default PathViewer;
