import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import { makeStyles } from "@material-ui/core/styles";

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
}));

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <img src="http://localhost:9091/logo.png" className={classes.logo} />
        <Typography variant="h6" className={classes.title}>
          Aurora
        </Typography>
        <Button color="inherit">目录</Button>
        <Button color="inherit">上传管理</Button>
        <Button color="inherit">
          登录
          <AccountCircleTwoToneIcon className={classes.userIcon} />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
