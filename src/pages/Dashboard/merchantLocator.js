import React, { useState } from "react";
//import "./merchantLocator.css";
import { Form } from 'react-bootstrap';
import { apiDomain } from "../../config.js"
import data from "../../data/data.json";

const MerchantLocator = () => {
  const [searchResults, setSearchResults] = useState([])
  const [merchant_Name, setMerchant_Name] = useState("")
  const [radius2, setRadius2] = useState("")

  const [criteriaSelector, setCriteriaSelector] = useState(0)

  const searchButtonClick = () => {
    var result = [];
    fetch(apiDomain + "/api/merchantLocator", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        merchantName: merchant_Name,
        countryCode: '840',
        lat: "37.363922",
        long: "-121.929163",
        radius: radius2
      })
    })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        data["merchantLocatorServiceResponse"]["response"].map(({ responseValues }) => {
          result.push({
            "name": responseValues["visaStoreName"],
            "distance": responseValues["distance"],
            "gps": responseValues["locationAddressLatitude"] + "," + responseValues["locationAddressLongitude"]
          })
        })
        setSearchResults(result)
      })

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
                <input className="radius-input form-control"></input>
                <div class="input-group-append">
                  <select className="radiusUnit-dropdown form-control" >
                    <option>meter(m)</option>
                    <option>kilometer(Km)</option>
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
            {
              criteriaSelector == 1 ? <h3 className="my-4 text-center">Merchant Details</h3>: (
                <>
                  <input className="form-control" placeholder="Merchant Name" />
                  <input className="form-control" placeholder="Merchant Country code" />            
                </>
              )
            }
            </div>
          </div>
          <div className="col-sm-2 text-center v-100"><h4 className="my-4">OR</h4></div>
          <div className="col-sm-5" onClick={() => setCriteriaSelector(1)}>
            <div className="form-group">
              {
                criteriaSelector == 0 ? <h3 className="my-4 text-center">Merchant Category</h3> :<>
                <label>Merchant Category</label>
                <select className="form-control" >
                  <option>Carpenter</option>
                  <option>Fastfood</option>
                </select>         
                </>
              }
            </div>            
          </div>
          <div className="col-sm-12">

          </div>
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
          <center><button type="button" className="btn btn-primary btn-lg w-25" onClick={() => searchButtonClick()}>Search</button></center>
        </div>
      </div>
      <div className="col-12 my-5">
        <h3>Result</h3>
        <table className="table">
          <tr>
            <th>Name</th>
            <th>GPS Coordinates</th>
            <th>Distance</th>
          </tr>
          {
            searchResults.map((result) => {
              return (
                <tr>
                  <td>{result["name"]}</td>
                  <td>{result["gps"]}</td>
                  <td>{result["distance"]}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  );
};
export default MerchantLocator;
