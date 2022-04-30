import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { itemsArray } from "./Items";

const Shop = () => {
  const getDivId = (e) => {
    window.value = e.currentTarget.id;
    localStorage.setItem("id", e.currentTarget.id);
  };

  return (
    <div className="shop-page">
      <div className="shop">
        <h1>shop</h1>
        <div className="card">
          {itemsArray.map((val) => {
            return (
              <div key={val.id} className="product-container">
                <Link to="/productInfo" style={{ textDecoration: "none" }}>
                  <div
                    onClick={getDivId}
                    className="product-card"
                    id={val.id}
                    style={{ backgroundImage: `url(${val.images[0]})` }}
                  ></div>

                  <div className="product-info-blurb">
                    <h1 className="title-product">{val.title}</h1>
                    <h2>CA${val.price}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
