import React from "react";
import { NavLink } from "react-router-dom";

import "./sidePanel.css";

const sidePanel = (props) => {
  return (
    <div className="pt-5">
      <ul className="sidepanel">
        <li>
          <NavLink to="/dashboard" exact className="link">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/calculator" className="link">Calculate Recovery Score </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/locator" className="link">Search Local Suppliers</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/track" className="link">Track Your Progress</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/score-analyser" className="link">Score Analyser</NavLink>
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
