import { NavLink } from "react-router-dom";

const Link = ({ path, children }) => {
  return (
    <NavLink
      className="p-2 bg-emerald-100 hover:bg-emerald-200 transition-all duration-300 ease-in-out border rounded-md border-emerald-600"
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default Link;
