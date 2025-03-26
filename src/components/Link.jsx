import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ path, children }) => {
  return (
    <NavLink
      className="p-2 bg-emerald-100 hover:bg-emerald-200 border rounded-md border-emerald-600"
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default Link;
