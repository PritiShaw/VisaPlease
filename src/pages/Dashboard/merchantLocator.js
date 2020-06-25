import React, { useState } from "react";
import "./merchantLocator.css"

const MerchantLocator = () => {
    const [searchResults, setSearchResults] = useState([]);
    const searchButtonClick = () => {
        var result = []
        fetch("https://visa-please.vercel.app/api/merchantLocator")
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
    }

    return (
        <div className="col-12 py-3 bg-light text-dark">
            <div className="col-12">
                <h2>Merchant Locator</h2>
            </div>
            <hr />
            <div className="col-12">
                <p>Descirption ya kuch dena hai one line me</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="radius">Radius (m): </h6>
                    </div>
                    <div className="col-sm-3">
                        <select className="form-control" className="radius-dropdown" >
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>
                    </div>
                    <div className="col-sm-3" className="merchant-name">
                        <h6>Merchant Name: </h6>
                    </div>
                    <div className="col-sm-3">
                        <select className="form-control" className="name-dropdown" >
                            <option>Starbucks</option>
                            <option>PQR</option>
                            <option>MNO</option>
                            <option>XYZ</option>
                        </select>
                    </div>
                    <div className="button-search" className="col-sm-12">
                        <center><button type="button" className="btn btn-primary" onClick={() => searchButtonClick()}>Search</button></center>
                    </div>
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
    )
}
export default MerchantLocator;