import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebaseConfig";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Track from "./../Dashboard/track";
import Calculator from "./calculator";
import Profile from "../Dashboard/Profile"
import MerchantLocator from "./merchantLocator";
// import AddSupplier from "./Questions/AddSupplier";
import SidePanel from "./components/sidePanel";
import "./calculator.css"
const Dashboard = () => {
  const cookies = new Cookies();
  const userid = cookies.get("userid");
  const [firstName, setFirstName] = useState();

  useEffect(() => {
    async function fetchInfo() {
      const userRef = firestore.doc(`users/${userid}`);
      const snapshot = await userRef.get();
      const userData = snapshot.data();
      setFirstName(userData.firstName);
    }
    fetchInfo();
  });
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom fixed-top">
        <div className="container">
          <Link id="visa" className="navbar-brand visa" to={"/sign-in"}>
            VISA
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link id="Login" className="nav-link" to="/dashboard/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link id="Login" className="nav-link">LogOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="row w-100">
          <div className="col-sm-3">
            <SidePanel />
          </div>
          <div className="col-sm-9">
            <Switch>
              {/* <Route path="/dashboard" exact component={Calculator} /> */}
              <Route path="/dashboard/calculator" component={Calculator} />
              <Route path="/dashboard/locator" component={MerchantLocator} />
              <Route path="/dashboard" component={Track} />
              <Route path="/dashboard/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Dashboard;
