import { NavLink } from "react-router-dom";

const Link = ({ path, children }) => {
  return (
    <NavLink
      className="transition-transform transform hover:scale-105 text-xl font-medium text-emerald-200 hover:text-emerald-800 px-6 py-3 rounded-lg border border-emerald-200 hover:bg-emerald-200"
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default Link;
