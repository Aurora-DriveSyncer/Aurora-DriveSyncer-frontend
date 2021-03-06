import { createContext, React, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import IndexPage from "./layouts/IndexPage";
import SyncSetter from "./layouts/SyncSetter";
import Login from "./layouts/Login";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function WithHeader(props) {
  return (
    <div id="wrapper">
      <div id="nav-bar">
        <NavBar />
      </div>
      {props.children}
    </div>
  );
}

const SettingContext = createContext();

function App() {
  const [localPath, setLocalPath] = useState(
    sessionStorage.getItem("localPath") !== "null"
      ? sessionStorage.getItem("localPath")
      : ""
  );
  const [innerPath, setInnerPath] = useState("");
  const [curFolder, setCurFolder] = useState("");

  function SetRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          if (localPath) {
            return children;
          } else {
            return (
              <Redirect to={{ pathname: "/", state: { from: location } }} />
            );
          }
        }}
      ></Route>
    );
  }
  return (
    <div id="wrapper">
      <SettingContext.Provider
        value={{
          localPath,
          setLocalPath,
          innerPath,
          setInnerPath,
          curFolder,
          setCurFolder,
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <WithHeader>
                <Login />
              </WithHeader>
            </Route>
            <Route path="/upload-manage">
              <WithHeader>
                <SyncSetter />
              </WithHeader>
            </Route>
            <Route path="/file-viewer">
              <WithHeader>
                <IndexPage />
              </WithHeader>
            </Route>
          </Switch>
        </Router>
      </SettingContext.Provider>
    </div>
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       {/* <WithHeader>
    //         <IndexPage />
    //       </WithHeader> */}
    //       <div id="wrapper">
    //         <ThemeProvider theme={theme}>
    //           <div id="nav-bar">
    //             <NavBar />
    //           </div>
    //           <IndexPage />
    //         </ThemeProvider>
    //       </div>
    //     </Route>
    // <Route path="/upload-manage">
    //   {/* <WithHeader>
    //     <SyncSetter />
    //   </WithHeader> */}
    //   <div id="wrapper">
    //     <ThemeProvider theme={theme}>
    //       <div id="nav-bar">
    //         <NavBar />
    //       </div>
    //       <SyncSetter />
    //     </ThemeProvider>
    //   </div>
    // </Route>
    // <Route path="/login">
    //   <Login />
    // </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
export { SettingContext };
