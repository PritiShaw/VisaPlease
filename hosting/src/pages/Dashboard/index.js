import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebaseConfig";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Calculator from "./calculator"
import MerchantLocator from "./merchantLocator";

import SidePanel from "./components/sidePanel"

const Dashboard = ({ location }) => {
  //  const userid = location.state.userid
  //  const [firstName, setFirstName] = useState();

  useEffect(() => {
    async function fetchInfo() {
      //  const userRef = firestore.doc(`users/${userid}`);
      //  const snapshot = await userRef.get();
      //  const userData = snapshot.data();
      //  setFirstName(userData.firstName)
    }
    // fetchInfo()
  });
  return (
    <div>
      <div className="col-sm-3">
        <SidePanel/>
      </div>
      <div className="col-sm-9">
        <Router>
          <Switch>
            <Route path="/dashboard/" exact component={Calculator} />
            {/* Upar wala me */}
            <Route path="/dashboard/calculator" component={Calculator} />
            <Route path="/dashboard/locator" component={MerchantLocator} />
          </Switch>
        </Router>
      </div>
    </div>    
  )
};
export default Dashboard;