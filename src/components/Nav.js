import logo from "../logo.png";
import { BsBag } from "react-icons/bs";
import Shop from "./Shop";
import BannerMessage from "./BannerMessage";
import React, { useState, useEffect, useContext } from "react";
const Nav = () => {
  const [isShopActive, setShopActive] = useState("false");

  const showShop = () => {
    setShopActive(!isShopActive);
  };
  return (
    <div className="nav">
      <BannerMessage />
      <ul>
        <li>
          <a className="title" href="default.asp">
            Lily Pad Paper & Co
          </a>
        </li>
        <img className="logo" src={logo}></img>
        <div className="links">
          <li>
            <a onClick={showShop} href="#shop">
              Shop
            </a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
          <li>
            <a href="about.asp">Contact </a>
          </li>
          <li>
            <BsBag
              size={25}
              className="shopping-bag"
              style={{ cursor: "pointer" }}
            />
          </li>
        </div>
      </ul>
      {isShopActive == false && <Shop />}
    </div>
  );
};
export default Nav;
