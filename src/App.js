import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Track from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from './logo.svg';
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Authentication from "./pages/Auth";
import About from "./pages/About";
import UserProvider from "./providers/UserProvider";
import Map from "./pages/map.js";

const Application = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={DashboardHome} />  */}
        <Route path="/auth" component={Authentication} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/map" component={Map} />
      </Switch>
    </Router>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
};

export default App;
