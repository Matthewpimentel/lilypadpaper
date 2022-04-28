import logo from "../logo.png";
import { BsBag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import BannerMessage from "./BannerMessage";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const openMenu = () => {
    var hamburger = document.getElementById("hamburger-menu");
    if (hamburger.style.display === "block") {
      hamburger.style.display = "none";
    } else {
      hamburger.style.display = "block";
    }
  };
  return (
    <div>
      <div className="nav-desktop">
        <BannerMessage />
        <ul className="nav-bar-headers">
          <li>
            <Link className="title" to="/">
              Lily Pad Paper & Co
            </Link>
          </li>
          <Link to="/">
            <img className="logo" src={logo}></img>
          </Link>
          <div className="links">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">
                <BsBag
                  size={25}
                  className="shopping-bag"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="nav-mobile">
        <BannerMessage />
        <ul className="nav-bar-headers-mobile">
          <li className="hamburger">
            <AiOutlineMenu className="hamburger-icon" onClick={openMenu} />
          </li>
          <li>
            <Link className="title-mobile" to="/">
              Lily Pad Paper & Co
            </Link>
          </li>
        </ul>
        <div id="hamburger-menu" className="hamburger-menu">
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/cart">
                <BsBag
                  size={25}
                  className="shopping-bag"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;
