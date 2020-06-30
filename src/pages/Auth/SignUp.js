import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { generateUserDocument, merchantLocatorRegister } from "../../utils/firestore";
import "../Dashboard/calculator.css"

const SignIn = () => {
  const history = useHistory()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [visaStoreId, setVisaStoreId] = useState("");
  const [categoryCode, setCategoryCode] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [page, setPage] = useState(0);

  const [error, setError] = useState(null);
  const registerAccount = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      let merchantLat = "0"
      let merchantLong = "0"
      let otherDetails = {firstName, lastName, companyName, countryCode, visaStoreId, categoryCode, postalCode}
      console.log(otherDetails)
      let merchantDetails = await merchantLocatorRegister(countryCode, companyName, postalCode)
      // if ("response" in merchantDetails ){
      //   for( let merchant in merchantDetails["response"]){
      //     if(merchant["responseValues"]["visaStoreId"]==visaStoreId){
      //       merchantLat = merchantDetails["response"]["locationAddressLatitude"]
      //       merchantLong = merchantDetails["response"]["locationAddressLongitude"] 
      //       break
      //     }
      //   }
      // }
      await generateUserDocument(user, otherDetails);
      setError("Registration Successfull");
      // history.push("/dashboard")
      // window.location.reload()
    } catch (err) {
      setError("Error Signing up with email and password");
    }
  };

  return (
    <>
      <div className="sign-up">
        <div>
          <h3>Sign Up</h3>
          {(page == 0) ? (
            <>
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={() => setPage(1)}
              >
                Next
              </button>
            </>
          ) : (
              <>
                <div className="form-group">
                  <label>Company name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Country Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Visa Store Id</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Visa Store Id"
                    value={visaStoreId}
                    onChange={(e) => setVisaStoreId(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Merchant category code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category code"
                    value={categoryCode}
                    onChange={(e) => setCategoryCode(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Merchant Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={() => registerAccount()}
                >
                  Sign Up
                </button>
              </>
            )}
          <p className="forgot-password text-right">
            Already registered <Link to="/auth/login">sign in?</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default SignIn;



