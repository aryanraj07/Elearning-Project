import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="bg-[#00008B] min-w-10 py-3 px-2 mb-4">
        <div>
          <ul className="flex flex-wrap  text-white justify-between">
            <div>
              <li>
                <Link to="/">Elearing360</Link>
              </li>
            </div>
            <div className="flex gap-3">
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-green-400"
                        : " text-white hover:text-green-500 "
                    }`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-green-400"
                        : "text-white hover:text-green-500 "
                    }`
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-green-400"
                        : "text-white hover:text-green-500 "
                    }`
                  }
                  to="/courses"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <input
                  type="search"
                  placeholder="Search"
                  className="text-black"
                />
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
