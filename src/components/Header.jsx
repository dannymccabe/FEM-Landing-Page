import React from "react";
import logo from "../images/logo.svg";
import chevronDown from "../images/icon-arrow-down.svg";
import chevronUp from "../images/icon-arrow-up.svg";
import menuOpen from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close-menu.svg";
import todoList from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import { useState } from "react";

const Header = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-button");

    navbar.classList.toggle("open");

    if (navbar.classList.contains("open")) {
      menuButton.src = closeMenu;
    } else {
      menuButton.src = menuOpen;
    }
  };

  return (
    <header className="p-5 flex items-center justify-between">
      <div className="lg:flex lg:items-start lg:justify-start">
        <img src={logo} className="lg:mr-5" />
        <nav className="navbar mb-2 lg:mb-0">
          <div>
            <button
              onClick={() => setOpenFeatures(!openFeatures)}
              className="flex items-center justify-start"
            >
              Features{" "}
              {openFeatures ? (
                <img src={chevronUp} alt="" className="ml-2" />
              ) : (
                <img src={chevronDown} alt="" className="ml-2" />
              )}
            </button>
            {openFeatures && (
              <ul className="mt-2 ml-3 lg:p-3 lg:ml-0 lg:shadow">
                <li className="flex items-center justify-start text-sm mb-2">
                  <img src={todoList} alt="" className="mr-2" />
                  Todo List
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  <img src={calendar} alt="" className="mr-2" />
                  Calendar
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  <img src={reminders} alt="" className="mr-2" />
                  Reminders
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  <img src={planning} alt="" className="mr-2" />
                  Planning
                </li>
              </ul>
            )}
          </div>
          <div>
            <button
              onClick={() => setOpenCompany(!openCompany)}
              className="flex items-center justify-start"
            >
              Company{" "}
              {openCompany ? (
                <img src={chevronUp} alt="" className="ml-2" />
              ) : (
                <img src={chevronDown} alt="" className="ml-2" />
              )}
            </button>
            {openCompany && (
              <ul className="mt-2 ml-3 lg:p-3 lg:ml-0 lg:shadow">
                <li className="flex items-center justify-start text-sm mb-2">
                  History
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  Our Team
                </li>
                <li className="flex items-center justify-start text-sm mb-2">
                  Blog
                </li>
              </ul>
            )}
          </div>
          <div>
            <button>Careers</button>
          </div>
          <div>
            <button>About</button>
          </div>
        </nav>
      </div>
      <div className="lg:hidden">
        <button onClick={handleOpenMenu}>
          <img src={menuOpen} className="menu-button" />
        </button>
      </div>

      <div className="hidden lg:block">
        <button className="mr-10 opacity-75">Login</button>
        <button className="border-2 border-black opacisty-75 px-6 py-2 rounded-2xl">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;
