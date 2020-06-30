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
          <Link to="/dashboard/calculator" className="link">Score calculator</Link>
        </li>
        <li>
          <Link to="/dashboard/locator" className="link">Merchant locator</Link>
        </li>
        <li>
          <Link to="/dashboard/track" className="link">Track your progress</Link>
        </li>
        <li>
          <Link to="/dashboard/tips" className="link">Tips</Link>
        </li>
        <li>
          <Link to="/dashboard/profile" className="link">Profile</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default sidePanel;
