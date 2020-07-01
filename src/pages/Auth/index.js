import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Dashboard/calculator.css"
import Login from "./Login";
import SignUp from "./SignUp";
import Hero from "./hero"

const Authentication = () => {
    return (
        <Router>
            <div className="App h-100">
                <div className="container-fluid h-100 ">
                    <div className="row h-100 d-flex align-items-center">
                        <div className="col-md-7">
                            <Hero/>
                        </div>
                        <div className="col-md-5">
                            <div className="auth-wrapper">
                                <div className="auth-inner">
                                    <Switch>
                                        <Route path="/auth" exact component={Login} />
                                        <Route path="/auth/login" component={Login} />
                                        <Route path="/auth/register" component={SignUp} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Authentication;
