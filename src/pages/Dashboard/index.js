import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebaseConfig";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import Track from "./../Dashboard/track";
import Calculator from "./calculator";
import Profile from "../Dashboard/Profile"
import MerchantLocator from "./merchantLocator";
import Dash from "../Dashboard/Dash"
import GeneralTips from "../Dashboard/GeneralTips"
import TipsForLoan from "../Dashboard/TipsForLoan"
import TipsForBusinessPerformance from "../Dashboard/TipsForBusinessPerformance"
import TipsForCashFlow from "../Dashboard/TipsForCashFlow"
import TipsForTech from "../Dashboard/TipsForTech"
import TipsForSuppliers from "../Dashboard/TipsForSuppliers"
import SidePanel from "./components/sidePanel";
import ScoreDisplay from "./Display/ScoreDisplay";
import Dp from "../Dashboard/Dp"
import "./calculator.css"
const Dashboard = () => {
  const cookies = new Cookies();
  const userid = cookies.get("userid");
  const [firstName, setFirstName] = useState();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    async function fetchInfo() {
      const userRef = firestore.doc(`users/${userid}`);
      const snapshot = await userRef.get();
      const userData = snapshot.data();
      if (!userData)
        window.location = "/auth"
      setFirstName(userData.firstName);
    }
    fetchInfo();
  });

  const logout = async () => {
    await cookies.remove("userid", { path: '/' })
    window.location = "/auth"
  }
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom fixed-top">
        <div className="container">
          <Link id="visa" className="navbar-brand visa">
            VRecover
          </Link>
          <button class="navbar-toggler" type="button" onClick={() => setShowMenu(!showMenu)}><span>{showMenu ? "X" : "Menu"}</span></button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link id="Login" className="nav-link" onClick={() => logout()}>LogOut</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className={"col-sm-3 col-12 d-sm-block px-0 " + (showMenu ? "" : "d-none")}>
            <SidePanel logout={logout} setShowMenu={setShowMenu}/>
          </div>
          <div className="col-sm-9 pt-5">
            <Switch>

              <Route path="/dashboard/ScoreDisplay" exact component={ScoreDisplay} />
              <Route path="/dashboard/calculator" component={Calculator} />
              <Route path="/dashboard/locator" component={MerchantLocator} />
              <Route path="/dashboard/profile" component={Profile} />
              <Route path="/dashboard/track" component={Track} />
              <Route path="/dashboard/general-tips" component={GeneralTips} />
              <Route path="/dashboard/tips-for-loan" component={TipsForLoan} />
              <Route path="/dashboard/tips-for-business-performance" exact component={TipsForBusinessPerformance} />
              <Route path="/dashboard/tips-for-cash-flow" exact component={TipsForCashFlow} />
              <Route path="/dashboard/tips-for-tech" exact component={TipsForTech} />
              <Route path="/dashboard/tips-for-suppliers" exact component={TipsForSuppliers} />
              <Route path="/dashboard/score-analyser" component={Dp} />
              <Route path="/dashboard" component={Dash} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Dashboard;
