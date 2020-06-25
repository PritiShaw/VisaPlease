import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebaseConfig"
import Cookies from 'universal-cookie';

const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler =
        () => {

            auth.signInWithEmailAndPassword(email, password).then((e) => {
                const cookies = new Cookies();
                cookies.set('userid', e.user.uid, { path: '/' });
                history.push({
                    pathname: '/dashboard/',
                    state: { userid: e.user.uid }
                })

            }).catch(error => {
                setError("Error signing in with password and email!");
                console.error("Error signing in with password and email", error);
            });
        };

    return (
        <div className="mt-8">
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={() => signInWithEmailAndPasswordHandler()}>Submit</button>
            {/* <button type="submit" className="btn btn-primary btn-block" onClick={() => googleSignIn()}>Login with Google</button> */}
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
            <hr />
            {error}
        </div>
    );
};
export default SignIn;