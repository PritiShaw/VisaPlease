import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { apiDomain } from "../../config.js";
import ResultMap from "./components/resultMap.js";
import {
  getUserDocument
} from "../../utils/firestore.js";

const MerchantLocator = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [radiusInput, setRadiusInput] = useState(50);
  const [radiusUnit, setRadiusUnit] = useState("M");
  const [device_lat, setDevice_lat] = useState("37.363922");
  const [device_long, setDevice_long] = useState("-121.929163");
  const [merchant_Name, setMerchant_Name] = useState("");
  const [merchantCountryCode, setMerchantCountryCode] = useState("");
  const [merchantCategory, setMerchantCategory] = useState(["1750"]);
  const [startIndex, setStartIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [criteriaSelector, setCriteriaSelector] = useState(0);

  const cookies = new Cookies();
  const userid = cookies.get("userid");

  useEffect(() => {
    const updateMapCenter = async () =>{
      let userDetails = await getUserDocument(userid)
      setDevice_lat((userDetails && userDetails["latitude"]) ? userDetails["latitude"] : "37.363922")
      setDevice_long((userDetails && userDetails["longitude"]) ? userDetails["longitude"] : "-121.929163")
      setShowMap(true)
    }
    if (!userid) {
      window.location = "/auth";
    }
    updateMapCenter()
  }, [])

  const handleCategoryCode = (event) => {
    let newCategoryList = [];
    [...event.target.options].filter(o => o.selected).map(o => newCategoryList.push(o.value))

    setMerchantCategory(newCategoryList)
  }

  const searchButtonClick = () => {
    var result = [];
    setSearchResults([]);
    fetch(apiDomain + "/api/merchantLocator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat: device_lat,
        long: device_long,
        radius: radiusInput,
        distanceUnit: radiusUnit,
        merchantName: merchant_Name,
        countryCode: merchantCountryCode,
        categoryCode: criteriaSelector == 1 ? merchantCategory : [],
        criteriaSelector: criteriaSelector,
        startIndex: startIndex,
      }),
    }).then((response) => {
      return response.json();
    })
      .then((data) => {
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
                gps_lat: responseValues["locationAddressLatitude"],
                gps_long: responseValues["locationAddressLongitude"],
              });
            }
          );
          setSearchResults(result);
        } else setSearchResults(undefined);
      });
  };

  return (
    <div className="col-12 mt-3">
      <div className="col-12 pt-5">
        <h2>Search Suppliers Near Your Store</h2>
      </div>
      <hr />
      <div className="col-12">
        <p>Locate Suppliers near your store either by their Name or Category Code</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label>Search Radius</label>
              <div className="input-group">
                <input
                  className="radius-input form-control"
                  type="number"
                  min="1"
                  max="100"
                  value={radiusInput}
                  onChange={(e) => e.target.value>0 && setRadiusInput(e.target.value)}
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
                <h3 className="my-4 text-center">Supplier Details</h3>
              ) : (
                  <>
                    <input
                      className="form-control"
                      placeholder="Supplier Name"
                      value={merchant_Name}
                      onChange={(e) => setMerchant_Name(e.target.value)}
                    />
                    <input
                      className="form-control"
                      placeholder="Supplier Country code"
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
                <h3 className="my-4 text-center">Supplier Category</h3>
              ) : (
                  <>
                    <label>Supplier Category</label>
                    <select multiple
                      className="form-control selectpicker"
                      value={merchantCategory}
                      onChange={(e) => handleCategoryCode(e)}
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
        <div className="button-search" className="col-sm-12">
          <center>
            <button
              type="button"
              className="btn btn-primary w-25"
              onClick={() => searchButtonClick()}
            >
              Search
            </button>
          </center>
        </div>
      </div>
      <div className="col-12 my-5 pb-3">
        <h3>Result</h3>
        <hr />
        {
          showMap && <ResultMap result={searchResults} center={[parseFloat(device_lat), parseFloat(device_long)]}  radius={parseInt(radiusInput)} />
          // (searchResults && searchResults.length > 0) ?
          //   <ResultMap result={searchResults} center={[device_lat, device_long]} /> :
          //   <h4 className="font-italics text-center">No results found</h4>
        }
      </div>
    </div>
  );
};
export default MerchantLocator;
