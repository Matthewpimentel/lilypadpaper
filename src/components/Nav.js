import logo from "../logo.png";
import { BsBag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import BannerMessage from "./BannerMessage";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
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
          <img className="logo" src={logo}></img>
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
      {/* <div className="nav-mobile">
        <BannerMessage />
        <ul className="nav-bar-headers-mobile">
          <li className="hamburger">
            <AiOutlineMenu className="hamburger-icon" />
          </li>
          <li>
            <Link className="title-mobile" to="/">
              Lily Pad Paper & Co
            </Link>
          </li>
        </ul>
        <div className="hamburger-menu">
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="about.asp">PlaceHolder </a>
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
      </div> */}
    </div>
  );
};
export default Nav;
