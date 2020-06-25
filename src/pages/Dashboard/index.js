import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebaseConfig";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from 'universal-cookie';

import Calculator from "./calculator"
import MerchantLocator from "./merchantLocator";
// import AddSupplier from "./Questions/AddSupplier";
import SidePanel from "./components/sidePanel"

const Dashboard = () => {
  const cookies = new Cookies();
  const userid = cookies.get('userid');
  const [firstName, setFirstName] = useState();

  useEffect(() => {
    async function fetchInfo() {
      const userRef = firestore.doc(`users/${userid}`);
      const snapshot = await userRef.get();
      const userData = snapshot.data();
      setFirstName(userData.firstName)
    }
    fetchInfo()
  });
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom">
        <div className="container">
          <Link className="navbar-brand visa" to={"/sign-in"}>VISA</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link">LogOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div >
        <div className="row w-100">
          <div className="col-sm-3">
            <SidePanel />
          </div>
          <div className="col-sm-9">
            <Switch>
              {/* <Route path="/dashboard" exact component={Calculator} /> */}
              <Route path="/dashboard/calculator" component={Calculator} />
              <Route path="/dashboard/locator" component={MerchantLocator} />

            </Switch>
          </div>
        </div>
      </div>
    </Router>

  )
};
export default Dashboard;