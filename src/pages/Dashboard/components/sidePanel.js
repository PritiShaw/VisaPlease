import React from "react";
import { Link } from "react-router-dom";

import "./sidePanel.css";

const sidePanel = () => {
  return (
    <div>
    <br/><br/>
    
      <ul className="sidepanel">
      <li>
          <Link to="/dashboard" className="link">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/calculator" className="link">Calculator</Link>
        </li>
        <li>
          <Link to="/dashboard/locator" className="link">Merchant</Link>
          {/* checkakr lena parht */}
        </li>
        
      </ul>
    </div>
  );
};

export default sidePanel;
