import React from "react";
import { NavLink } from "react-router-dom";

import "./sidePanel.css";

const sidePanel = (props) => {
  return (
    <div className="pt-5">
      <ul className="sidepanel">
        <li>
          <NavLink to="/dashboard" exact className="link" onClick={()=>props.setShowMenu(false)}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/calculator" className="link" onClick={()=>props.setShowMenu(false)}>Calculate Recovery Score </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/locator" className="link" onClick={()=>props.setShowMenu(false)}>Search Local Suppliers</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/track" className="link" onClick={()=>props.setShowMenu(false)}>Track Your Progress</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/score-analyser" className="link" onClick={()=>props.setShowMenu(false)}>Score Analyser</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/profile" className="link" onClick={()=>props.setShowMenu(false)}>Profile</NavLink>
        </li>
        <li className="link mobile-link" onClick={() => props.logout()}>
          LogOut
        </li>
      </ul>
    </div>
  );
};

export default sidePanel;
