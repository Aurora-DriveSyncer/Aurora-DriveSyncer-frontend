import React, { useContext, useEffect, useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import { BootstrapInput, ColorOutlineButton, ColorButton } from "./Login";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import service from "../utils/axios";
import { SettingContext } from "../App";

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
    margin: "0 !important",
    marginTop: "24px !important",
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
  const [settings, setSettings] = useState({
    filePassword: "",
    localPath: "",
    password: "",
    url: "",
    username: "",
  });
  const { setLocalPath, setInnerPath } = useContext(SettingContext);

  useEffect(() => {
    service
      .get("/api/config/")
      .then((res) => {
        setSettings(res.data);
        setLocalPath(res.data.localPath);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }, []);

  function handleTextChange(event) {
    setSettings({ ...settings, [event.target.id]: event.target.value });
  }

  function handleFilePathChange(event) {
    console.log(event.target.files[0]);
  }

  function handleSubmit() {
    setLocalPath(settings.localPath);
    setInnerPath("");
    // sessionStorage.setItem("localPath", settings.localPath);
    // sessionStorage.setItem("filePassword", settings.filePassword);
    // sessionStorage.setItem("password", settings.password);
    // sessionStorage.setItem("url", settings.url);
    // sessionStorage.setItem("username", settings.username);
    service.put("/api/config/", settings).catch((err) => {
      alert(err.toString());
    });
  }
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
            htmlFor="url"
            classes={{
              focused: classes.label,
            }}
          >
            远程URL
          </InputLabel>
          <BootstrapInput
            id="url"
            onChange={handleTextChange}
            value={settings.url}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel
            shrink={true}
            htmlFor="localPath"
            classes={{
              focused: classes.label,
            }}
          >
            本地文件夹
          </InputLabel>
          <BootstrapInput
            id="localPath"
            onChange={handleTextChange}
            value={settings.localPath}
          />
          {/* <ColorOutlineButton
            variant="outlined"
            className={classes.uploadFileButton}
          >
            选择本地文件夹路径
            <input
              type="file"
              className={classes.fileInput}
              onChange={handleFilePathChange}
            />
          </ColorOutlineButton>
          <span>/MaterialUI/design/button</span> */}
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel
            shrink={true}
            htmlFor="username"
            classes={{
              focused: classes.label,
            }}
          >
            远程用户名
          </InputLabel>
          <BootstrapInput
            id="username"
            onChange={handleTextChange}
            value={settings.username}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel
            htmlFor="password"
            shrink={true}
            classes={{
              focused: classes.label,
            }}
          >
            远程密码
          </InputLabel>
          <BootstrapInput
            type="password"
            id="password"
            onChange={handleTextChange}
            value={settings.password}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel
            htmlFor="filePassword"
            shrink={true}
            classes={{
              focused: classes.label,
            }}
          >
            文件加密密码
          </InputLabel>
          <BootstrapInput
            type="password"
            id="filePassword"
            onChange={handleTextChange}
            value={settings.filePassword}
          />
        </FormControl>
        <ColorButton
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          保存
        </ColorButton>
      </form>
    </>
  );
}
export default Setting;
