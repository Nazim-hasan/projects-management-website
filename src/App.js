import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Dashboard from "./Pages/Developer/Dashboard/Dashboard/Dashboard";
import Menu from "./Pages/Shared/Menu/Menu";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Shared/Login/Login";
import Home from "./Pages/Developer/Home/Home";
import axios from "axios";
import Register from "./Pages/Shared/Register/Register";
import VerifiyRegister from "./Pages/Shared/VerifiyRegister/VerifiyRegister";

var token = null;
if (localStorage.getItem("user")) {
  var obj = JSON.parse(localStorage.getItem("user"));
  token = obj.access_token;
}
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;

function App() {
  return (
    // <div className="wrapper">
    <BrowserRouter>
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/verify/:email">
            <VerifiyRegister />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    // </div>
  );
}

export default App;
