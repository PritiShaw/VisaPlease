import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { apiDomain } from "../../config.js";
import data from "../../data/data.json";

const MerchantLocator = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [radiusInput, setRadiusInput] = useState(50);
  const [radiusUnit, setRadiusUnit] = useState("M");
  const [merchant_Name, setMerchant_Name] = useState("");
  const [merchantCountryCode, setMerchantCountryCode] = useState("");
  const [merchantCategory, setMerchantCategory] = useState("1750");
  const [startIndex, setStartIndex] = useState(0);
  const [criteriaSelector, setCriteriaSelector] = useState(0);

  const searchButtonClick = () => {
    var result = [];
    setSearchResults([]);
    fetch(apiDomain + "/api/merchantLocator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat: "37.363922",
        long: "-121.929163",
        radius: radiusInput,
        distanceUnit: radiusUnit,
        merchantName: merchant_Name,
        countryCode: merchantCountryCode,
        categoryCode: criteriaSelector == 1 ? [merchantCategory] : [],
        criteriaSelector: criteriaSelector,
        startIndex: startIndex,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(JSON.stringify(data));
        if ("response" in data["merchantLocatorServiceResponse"]) {
          data["merchantLocatorServiceResponse"]["response"].map(
            ({ responseValues }) => {
              result.push({
                name: responseValues["visaStoreName"],
                storeId: responseValues["visaStoreId"],
                address:
                  responseValues["merchantStreetAddress"] +
                  ", " +
                  responseValues["merchantCity"] +
                  ", " +
                  responseValues["merchantPostalCode"] +
                  ", " +
                  responseValues["merchantState"],
                distance: responseValues["distance"],
                payment_Method: responseValues["paymentAcceptanceMethod"],
              });
            }
          );
          setSearchResults(result);
        } else setSearchResults(undefined);
      });
  };

  return (
    <div className="col-12 py-3 bg-light text-dark">
      <div className="col-12">
        <h2>Merchant Locator</h2>
      </div>
      <hr />
      <div className="col-12">
        <p>To locate desired local suppliers</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Radius</label>
              <div className="input-group">
                <input
                  className="radius-input form-control"
                  type="number"
                  min="0"
                  max="100"
                  value={radiusInput}
                  onChange={(e) => setRadiusInput(e.target.value)}
                ></input>
                <div class="input-group-append">
                  <select
                    className="radiusUnit-dropdown form-control"
                    value={radiusUnit}
                    onChange={(e) => setRadiusUnit(e.target.value)}
                  >
                    <option value="M">meter(m)</option>
                    <option value="KM">kilometer(Km)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <label>Search by</label>
          </div>
          <div className="col-sm-5" onClick={() => setCriteriaSelector(0)}>
            <div className="form-group">
              {criteriaSelector == 1 ? (
                <h3 className="my-4 text-center">Merchant Details</h3>
              ) : (
                <>
                  <input
                    className="form-control"
                    placeholder="Merchant Name"
                    value={merchant_Name}
                    onChange={(e) => setMerchant_Name(e.target.value)}
                  />
                  <input
                    className="form-control"
                    placeholder="Merchant Country code"
                    value={merchantCountryCode}
                    onChange={(e) => setMerchantCountryCode(e.target.value)}
                  />
                </>
              )}
            </div>
          </div>
          <div className="col-sm-2 text-center v-100">
            <h4 className="my-4">OR</h4>
          </div>
          <div className="col-sm-5" onClick={() => setCriteriaSelector(1)}>
            <div className="form-group">
              {criteriaSelector == 0 ? (
                <h3 className="my-4 text-center">Merchant Category</h3>
              ) : (
                <>
                  <label>Merchant Category</label>
                  <select
                    className="form-control"
                    value={merchantCategory}
                    onChange={(e) => setMerchantCategory(e.target.value)}
                  >
                    <option value="1750">Carpentery</option>
                    <option value="5137">Clothing</option>
                    <option value="5039">Construction</option>
                    <option value="5942">Stationary</option>
                    <option value="5045">Computer</option>
                    <option value="5251">Hardware</option>
                  </select>
                </>
              )}
            </div>
          </div>
          <div className="col-sm-12"></div>
          <div className="col-sm-12"></div>
        </div>
        <br />
        {/*             
        <div className="row">
          <div className="col-sm-12" className="merchant-name">
            
            <Form>
              <Form.Group >
                <Form.Label>Using merchant name and merchant country code</Form.Label>
                <Form.Control type="radio" placeholder="Company Name" />
              </Form.Group>
              <Form.Group >
                <Form.Label>Using merchant category code</Form.Label>
                <Form.Control type="radio" placeholder="Company Address" />
              </Form.Group>
            </Form> 
          </div>
        </div>
*/}
        <div className="button-search" className="col-sm-12">
          <center>
            <button
              type="button"
              className="btn btn-primary btn-lg w-25"
              onClick={() => searchButtonClick()}
            >
              Search
            </button>
          </center>
        </div>
      </div>
      <div className="col-12 my-5">
        <h3>Result</h3>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Street Address</th>
            <th>Distance</th>
            <th>Payment Method</th>
            <th>Visa storeID</th>
          </tr>
          {searchResults ? (
            searchResults.map((result) => {
              return (
                <tr>
                  <td>{result["name"]}</td>
                  <td>{result["address"]}</td>
                  <td>{result["distance"]}</td>
                  <td>{result["payment_Method"].join(", ")}</td>
                  <td>{result["storeId"]}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">No results found</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
};
export default MerchantLocator;
