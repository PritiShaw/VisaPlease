import React from "react";
import { NavLink } from "react-router-dom";

import "./sidePanel.css";

const sidePanel = (props) => {
  return (
    <div className="pt-5">
      <ul className="sidepanel">
        <li>
          <NavLink to="/dashboard" className="link">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/calculator" className="link">Score calculator</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/locator" className="link">Merchant locator</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/track" className="link">Track your progress</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/tips" className="link">Tips</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/profile" className="link">Profile</NavLink>
        </li>
        <li className="link mobile-link" onClick={() => props.logout()}>
          LogOut
        </li>
      </ul>
    </div>
  );
};

export default sidePanel;
