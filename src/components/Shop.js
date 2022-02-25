import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Items from "./Items";

const Shop = () => {
  const getDivId = (e) => {
    window.value = e.currentTarget.id;
  };

  return (
    <div>
      <div className="shop">
        <h1>shop</h1>
        <div className="card">
          {Items.map((val) => {
            return (
              <div key={val.id} className="product-container">
                <Link to="/productInfo">
                  <div
                    onClick={getDivId}
                    className="product-card"
                    id={val.id}
                    style={{ backgroundImage: `url(${val.image})` }}
                  ></div>
                </Link>
                <div className="product-info-blurb">
                  <h1 className="title-product">{val.title}</h1>
                  <h2>CA${val.price}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
