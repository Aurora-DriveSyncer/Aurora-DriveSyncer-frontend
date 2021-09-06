import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Setting from "./Setting";
import { Link } from "react-router-dom";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `rgba(60, 128, 57, 0.3) 0 0 0 0.2rem`,
      borderColor: "#3c8039",
    },
  },
}))(InputBase);

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: green[600],
    "&:hover": {
      backgroundColor: green[700],
    },
    width: "100%",
    margin: theme.spacing(1),
    "& a": {
      textDecoration: "none",
      color: "#fff",
      display: "block",
      width: "100%",
    },
  },
}))(Button);

const ColorOutlineButton = withStyles((theme) => ({
  root: {
    color: green[600],
    // backgroundColor: green[600],
    "&:hover": {
      borderColor: green[700],
      //   backgroundColor: "rgba(204, 204, 204, .3)",
    },
    width: "100%",
    margin: theme.spacing(1),
    borderColor: green[700],
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  wrapper: {
    boxSizing: "border-box",
    display: "flex",
    width: "90%",
    margin: "0 auto",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  form: {
    width: "100%",
    margin: theme.spacing(1),
  },
  label: {
    color: "#3c8039 !important",
  },
  titleWrapper: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  loginSection: {
    boxSizing: "border-box",
    width: "50%",
    height: "98vh",
    padding: "10%",
    margin: "1vh 0",
    borderRight: "1px #eee solid",
  },
  link: {
    fontSize: "14px",
    textDecoration: "none",
    color: "#3c8039",
    marginLeft: theme.spacing(1),
  },
  settingSection: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // padding: "0 5% ",
    boxSizing: "border-box",
    width: "50%",
    padding: "5% ",
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.loginSection}>
        <div className={classes.titleWrapper}>
          <img src="http://localhost:9091/logo.png" alt="logo" />
          <h1>Aurora</h1>
        </div>

        <form className={classes.root} noValidate>
          <FormControl className={classes.form}>
            <InputLabel
              shrink={true}
              htmlFor="username"
              classes={{
                focused: classes.label,
              }}
            >
              用户名
            </InputLabel>
            <BootstrapInput placeholder="用户名" id="username" />
          </FormControl>
          <FormControl className={classes.form}>
            <InputLabel
              htmlFor="password"
              shrink={true}
              classes={{
                focused: classes.label,
              }}
            >
              密码
            </InputLabel>
            <BootstrapInput type="password" id="password" />
          </FormControl>
          <a href="#!" className={classes.link}>
            忘记密码？
          </a>
          <ColorButton variant="contained" color="primary">
            <Link to="/">登录</Link>
          </ColorButton>
          <ColorOutlineButton variant="outlined" color="primary">
            注册
          </ColorOutlineButton>
        </form>
      </div>
      <div className={classes.settingSection}>
        <Setting />
      </div>
    </div>
  );
}
export default Login;
export { BootstrapInput, ColorOutlineButton, ColorButton };
