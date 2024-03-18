import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import useTheme from "../context/themeContext";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/dropdown-menu";
const Header = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const toggleTheme = () => {
    themeMode === "dark" ? lightTheme() : darkTheme();
  };
  return (
    <div>
      <nav className="bg-indigo-50 py-4 dark:bg-zinc-800 flex flex-col gap-5 pl-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="">
              {" "}
              <img src="/logo.svg" alt="Logo" className="h-12 mr-4" />
            </Link>
          </div>
          <div className="relative">
            <input
              className="  py-2 pl-10 pr-5 w-[550px]  rounded-md focus:outline-none "
              type="text"
              placeholder="Search courses"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex gap-5 items-center">
            <Link
              to="/login"
              className="text-white font-medium hover:underline"
            >
              <Button variant="">Login/Register</Button>
            </Link>
            <Button onClick={toggleTheme}>
              {themeMode === "light" ? (
                <span class="material-symbols-outlined">dark_mode</span>
              ) : (
                <span class="material-symbols-outlined">wb_sunny</span>
              )}
            </Button>
          </div>
        </div>

        <ul className="flex gap-14 font-bold items-center text-xl pl-10">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-purple-900" : "text-black dark:text-white"
              } hover:text-purple-700 hover:text-lg hover:font-extrabold duration-300`
            }
            to="/courses"
          >
            <DropdownMenu className="relative">
              <DropdownMenuTrigger>
                Courses
                <span className="absolute top-[88px] left-25 material-symbols-outlined">
                  expand_more
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Explore Courses</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/webdev">
                  <DropdownMenuItem>Web Development</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Data Analyst</DropdownMenuItem>
                <DropdownMenuItem>Ai</DropdownMenuItem>
                <DropdownMenuItem>Finance</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-purple-900" : "text-black dark:text-white"
              } hover:font-extrabold duration-300 hover:text-purple-700 hover:text-xl`
            }
            to="/community"
          >
            Community
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-purple-900" : "text-black dark:text-white"
              } hover:font-extrabold duration-300 hover:text-purple-700 hover:text-xl`
            }
            to="/"
          >
            Elearing360 Lab
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-purple-900" : "text-black dark:text-white"
              } hover:font-extrabold duration-300 hover:text-purple-700 hover:text-xl`
            }
            to="/jobportal"
          >
            Job Portal
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-green-500" : "text-black dark:text-white"
              } hover:text-purple-700 hover:text-xl hover:font-extrabold duration-300`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
