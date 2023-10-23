import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart, BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
const getThemeFromLocalStorage = () => {
  const theme = global?.window?.localStorage?.getItem("theme") as string;
  if (theme) {
    return JSON.parse(theme);
  }
  return "garden";
};
const toggleTheme = () => {
  const newTheme =
    getThemeFromLocalStorage() === "garden" ? "halloween" : "garden";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", JSON.stringify(newTheme));
};
const Navbar = () => {
  // set theme on initial rendering
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      getThemeFromLocalStorage()
    );
  }, []);
  const isDarkTheme = getThemeFromLocalStorage() === "halloween";

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <Link
            className="hidden lg:flex btn btn-primary text-3xl items-center"
            href={"/"}
          >
            C
          </Link>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              defaultChecked={isDarkTheme}
              onChange={toggleTheme}
            />
            <BsSunFill className="h-4 w-4 swap-on" />

            <BsMoonFill className="h-4 w-4 swap-off" />
          </label>
          {/* CART LInk */}
          <Link href={"/cart"} className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                0
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
