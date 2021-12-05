import { NavLink } from "react-router-dom";
import "../Assets/Style/Style.css";

const Header = () => {
  return (
    <div className="header-container">
      <NavLink to="/" className="header-link">
        Home
      </NavLink>
      <NavLink to="/shortlisted" className="header-link">
        Selected Profile
      </NavLink>
      <NavLink to="/rejected" className="header-link">
        Rejected profile
      </NavLink>
    </div>
  );
};

export default Header;
