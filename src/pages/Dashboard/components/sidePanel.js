import React from "react";
import { Link } from "react-router-dom";

import "./sidePanel.css";

const sidePanel = () => {
  return (
    <div>
      <ul className="sidepanel">
        <li>
          <Link to="/dashboard/calculator" className="link">Calculator</Link>
        </li>
        <li>
          <Link to="/dashboard/locator" className="link">Merchant</Link>
          {/* checkakr lena parht */}
        </li>
        <li>
          <Link to="/dashboard/track" className="link">Track</Link>
        </li>
      </ul>
    </div>
  );
};

export default sidePanel;
