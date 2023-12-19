import React, { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets/index";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full h-[80px] bg-white border-b px-4">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logo} className="h-[25px]" />

        <div className="hidden md:flex items-center "></div>

        <div className="hidden md:flex">
          <Link
            to="/login"
            className=" flex justify-center items-center  bg-transparent  px-6 gap-2 py-4"
          >
            <img src={lock} />
            Login
          </Link>
          <button
            className="border w-12"
            onClick={() => {
              i18n.changeLanguage("ar");
            }}
          >
            ar
          </button>
          <button
            className="border w-12"
            onClick={() => {
              i18n.changeLanguage("fr");
            }}
          >
            fr
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <div className="flex flex-col my-4 gap-4">
            <Link
              to={"/login"}
              className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4"
            >
              <div>
                <img src={lock} />
                Login
              </div>
            </Link>
            <button
              onClick={() => {
                i18n.changeLanguage("ar");
              }}
            >
              ar
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage("fr");
              }}
            >
              en
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
