import React from "react";
import { Link } from "react-router-dom";

import "./sidePanel.css";

const sidePanel = () => {
  return (
    <div>
      <ul className="sidepanel">
        <li>
          <Link to="/dashboard/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/dashboard/locator">Merchant</Link> 
          {/* checkakr lena parht */}
        </li>
      </ul>
    </div>
  );
};

export default sidePanel;