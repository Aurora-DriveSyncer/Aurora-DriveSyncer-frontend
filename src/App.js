import "./App.css";
import NavBar from "./components/NavBar";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import IndexPage from "./layouts/IndexPage";
import SyncSetter from "./layouts/SyncSetter";
import Login from "./layouts/Login";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#fff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

function WithHeader(props) {
  return (
    <div id="wrapper">
      <ThemeProvider theme={theme}>
        <div id="nav-bar">
          <NavBar />
        </div>
        {props.children}
      </ThemeProvider>
    </div>
  );
}

function App() {
  return (
    <div id="wrapper">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
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
