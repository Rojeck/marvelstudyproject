import { Link, NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span>
          information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span style={{ color: isActive ? "red" : "black" }}>
                  Characters
                </span>
              )}
            </NavLink>
          </li>
          /
          <li>
          <NavLink to="/comics">
              {({ isActive }) => (
                <span style={{ color: isActive ? "red" : "black" }}>
                  Comics
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
