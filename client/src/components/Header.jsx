import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <div>
          <ul className="flex flex-wrap gap-3 ">
            <li>
              <Link to="/">Elearing360</Link>
            </li>
            <li>
              <Link>Login</Link>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-green-400" : " text-gray-700"}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-green-400" : "text-gray-700"}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
