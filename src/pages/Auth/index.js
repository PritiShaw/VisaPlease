import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Dashboard/calculator.css"
import Login from "./Login";
import SignUp from "./SignUp";

const Authentication = () => {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand visa" id="visa" >VRecover</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" id="Login" to={"/auth/login"}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="signup" to={"/auth/register"}>Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="auth-wrapper pt-5">
                    <div className="auth-inner">
                        <Switch>
                            <Route path="/auth" exact component={Login} />
                            <Route path="/auth/login" component={Login} />
                            <Route path="/auth/register" component={SignUp} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Authentication;
