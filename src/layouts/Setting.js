import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import { ColorButton, BootstrapInput, ColorOutlineButton } from "./Login";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  link: {
    fontSize: "14px",
    textDecoration: "none",
    color: "#3c8039",
    marginLeft: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(3),
  },
  uploadFileButton: {
    // width: "auto",
    margin: 0,
    marginTop: "24px",
  },
  fileInput: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    opacity: 0,
  },
}));

function Setting() {
  const classes = useStyles();
  return (
    <>
      <h2 className={classes.title}>
        <SettingsIcon className={classes.icon} />
        <span>配置</span>
      </h2>
      <form className={classes.root} noValidate>
        <FormControl className={classes.form}>
          <InputLabel
            shrink={true}
            htmlFor="remote-url"
            classes={{
              focused: classes.label,
            }}
          >
            远程URL
          </InputLabel>
          <BootstrapInput id="remote-url" />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel
            shrink={true}
            htmlFor="local-path"
            classes={{
              focused: classes.label,
            }}
          >
            本地文件夹
          </InputLabel>
          {/* <BootstrapInput id="local-path" /> */}
          <ColorOutlineButton
            variant="outlined"
            className={classes.uploadFileButton}
          >
            选择本地文件夹路径
            <input type="file" className={classes.fileInput} />
          </ColorOutlineButton>
          <span>/MaterialUI/design/button</span>
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel
            shrink={true}
            htmlFor="remote-username"
            classes={{
              focused: classes.label,
            }}
          >
            远程用户名
          </InputLabel>
          <BootstrapInput id="remote-username" />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel
            htmlFor="remote-password"
            shrink={true}
            classes={{
              focused: classes.label,
            }}
          >
            远程密码
          </InputLabel>
          <BootstrapInput type="password" id="remote-password" />
        </FormControl>
        <ColorOutlineButton
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          保存
        </ColorOutlineButton>
      </form>
    </>
  );
}
export default Setting;
