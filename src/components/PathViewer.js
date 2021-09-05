import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const usePathStyle = makeStyles((theme) => ({
  link: {
    color: "#3c8039",
    lineHeight: "30px",
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function PathViewer() {
  const classes = usePathStyle();
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/" onClick={handleClick} className={classes.link}>
        Material-UI
      </Link>
      <Link
        className={classes.link}
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
}
export default PathViewer;
