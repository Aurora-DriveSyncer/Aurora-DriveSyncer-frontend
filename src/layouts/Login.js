import { React, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Setting from "./Setting";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/axios";
import service from "../utils/axios";
import RestoreIcon from "@material-ui/icons/Restore";

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
    // boxSizing: "border-box",
    // width: "50%",
    // height: "98vh",
    // padding: "10%",
    // margin: "1vh 0",
    boxSizing: "border-box",
    width: "50%",
    padding: "5% ",
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
    display: "flex",
    flexDirection: "column",
    // justifyContent: "left",
    alignItems: "flex-start",
    boxSizing: "border-box",
    width: "50%",
    padding: "5% ",
  },
  title: {
    display: "flex",
    alignItems: "center",
    fontWeight: 400,
    padding: "20px",
    paddingLeft: "5px",
  },
  icon: {
    margin: "10px",
    marginLeft: 0,
  },
}));

function Login() {
  const classes = useStyles();
  const [restorePath, setRestorePath] = useState("");

  function handleRestorePathChange(event) {
    setRestorePath(event.target.value);
  }

  function handleRestore() {
    service.get("/api/restore/?path=" + restorePath).catch((err) => {
      alert(err);
    });
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.loginSection}>
        <Setting />
      </div>
      <div className={classes.settingSection}>
        <h2 className={classes.title}>
          <RestoreIcon className={classes.icon} />
          <span>还原</span>
        </h2>
        <form className={classes.root} noValidate>
          <FormControl className={classes.form}>
            <InputLabel
              shrink={true}
              htmlFor="restore-path"
              classes={{
                focused: classes.label,
              }}
            >
              还原路径
            </InputLabel>
            <BootstrapInput
              id="restore-path"
              onChange={handleRestorePathChange}
            />
          </FormControl>

          <ColorButton
            variant="contained"
            color="primary"
            onClick={handleRestore}
          >
            恢复
          </ColorButton>
        </form>
      </div>
    </div>
  );
}
export default Login;
export { BootstrapInput, ColorOutlineButton, ColorButton };
