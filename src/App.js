import "./App.css";
import NavBar from "./components/NavBar";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import IndexPage from "./layouts/IndexPage";
import SyncSetter from "./layouts/SyncSetter";
import Login from "./layouts/Login";

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
    // <div id="wrapper">
    //   <ThemeProvider theme={theme}>
    //     <div id="nav-bar">
    //       <NavBar />
    //     </div>
    //     {/* <IndexPage /> */}
    //     {/* <SyncSetter /> */}
    //     {/* <Login /> */}
    //   </ThemeProvider>
    // </div>
    <Login />
  );
}

export default App;
