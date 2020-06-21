import React, { useState } from "react";
import "./merchantLocator.css"

function searchButtonClick(){
    
}
const MerchantLocator = () => {
    return (
        <div className="col-12 py-3 bg-light text-dark">
            <div className="col-12">
                <h2>Merchant Locator</h2>
            </div>
            <hr />
            <div className="col-12">
                <p>Descirption ya kuchHAa one line me</p>
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
        </div>
    )
}
export default MerchantLocator;