import "./App.css";
import NavBar from "./components/NavBar";
import IndexPage from "./layouts/IndexPage";
import SyncSetter from "./layouts/SyncSetter";
import Login from "./layouts/Login";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

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

function App() {
  return (
    <div id="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <WithHeader>
              <IndexPage />
            </WithHeader>
          </Route>
          <Route path="/upload-manage">
            <WithHeader>
              <SyncSetter />
            </WithHeader>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
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
