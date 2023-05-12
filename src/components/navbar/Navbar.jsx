import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/GPT-3.svg";

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
          <p><a href="#whatgpt3">What is GPT?</a></p>
          <p><a href="#whatgpt3">Open AI</a> </p>
          <p><a href="#possibility">Case Studies</a></p>
          <p><a href="#home">Library</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => settoggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => settoggleMenu(true)}
          />
        )}
        { toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
            <Menu/>
            </div>
            <div className="gpt3__navbar-menu-links-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
            </div>
        ) }
      </div>
    </div>
  );
};

export default Navbar;
