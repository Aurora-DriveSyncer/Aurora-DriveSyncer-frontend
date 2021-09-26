import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 999,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: "50px",
    marginBottom: "10px",
    marginRight: "5px",
  },
  userIcon: {
    marginLeft: "5px",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    color: "#000",
    textDecoration: "none",
  },
  colorPrimary: {
    backgroundColor: "#fff",
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      className={classes.root}
      color="primary"
      classes={{
        colorPrimary: classes.colorPrimary,
      }}
    >
      <Toolbar>
        <img
          src="https://raw.githubusercontent.com/Aurora-DriveSyncer/Aurora-DriveSyncer/master/img/logo.png"
          alt=""
          className={classes.logo}
        />
        <Typography
          variant="h6"
          className={classes.title}
          style={{ color: "#000" }}
        >
          Aurora
        </Typography>
        <Button component={Link} to="/">
          目录
        </Button>
        <Button component={Link} to="/upload-manage">
          上传管理
        </Button>
        <Button component={Link} to="/login">
          登录
          <AccountCircleTwoToneIcon className={classes.userIcon} />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
