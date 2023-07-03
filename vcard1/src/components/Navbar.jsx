import React, { useState } from "react";
import { menu, logo, close } from "../assets";
import { navLinks } from "../constants/index";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full flex bg-slate-700 p-6 justify-between items-center navbar`}
    >
      <img src={logo} className="w-[124px] h-[32px]" alt="logo" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((item, i) => {
          return (
            <li
              key={i}
              className={`font-popins font-normal cursor-pointer text-[16px] ${
                navLinks.length - 1 == i ? "mr-0" : "mr-10 "
              } text-white hover:font-bold`}
            >
              <Link to={`/${item.title}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none justify-end flex flex-1 flex-col">
          {navLinks.map((item, i) => {
            return (
              <li
                onClick={() => {
                  setToggle(!toggle);
                }}
                key={i}
                className={`font-popins font-normal cursor-pointer text-[16px] ${
                  navLinks.length - 1 == i ? "mb-0" : "mb-4 "
                } text-white`}
              >
                <Link to={`/${item.title}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
