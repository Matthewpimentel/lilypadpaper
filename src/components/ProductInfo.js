import { itemsArray } from "./Items";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updateCartQuantity } from "./Nav";
import { AiOutlineRollback } from "react-icons/ai";

import NavObj from "./Nav";

const ProductInfo = () => {
  var id = window.value;
  if (localStorage.getItem("id").length > 0) {
    id = localStorage.getItem("id");
  }
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(itemsArray[id].images[0]);
  const [addedToCart, setAddedTocart] = useState("");
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  let cart = [];
  let flag = true;

  const setQuantityDesktop = () => {
    var x = document.getElementById("desktop-quantity-selector");
    var quantitySelected = parseInt(x.value);
    setQuantity(quantitySelected);
    console.log(quantitySelected);
  };

  const setQuantityMobile = () => {
    var e = document.getElementById("mobile-quantity-selector");
    var quantitySelected = parseInt(e.value);
    setQuantity(quantitySelected);
    console.log(quantitySelected);
  };

  const addToCart = () => {
    if (cartItems != undefined) {
      for (let i = 0; i < cartItems.length; i++) {
        if (
          cartItems.length != 0 &&
          cart.length < itemsArray.length &&
          cartItems[i].id != id
        ) {
          cart.push({ id: cartItems[i].id, quantity: cartItems[i].quantity });
        }
      }
    }

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        flag = false;
      }
    }

    if (flag == true) {
      cart.push({ id: id, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setAddedTocart("Added To Cart!");
  };

  const changePicture = (e) => {
    const holdImage = mainImage;
    setMainImage(e.currentTarget.src);
    e.currentTarget.src = holdImage;
  };

  return (
    <div className="product-info-page">
      <div className="product">
        {itemsArray.map((val, i) => {
          if (val.id == id) {
            return (
              <div key={i}>
                <div className="flex-container">
                  <div className="product-info-back-button">
                    <Link to="/shop">
                      <AiOutlineRollback size={40} />
                    </Link>
                  </div>
                  <div
                    id="product-image-active"
                    className="product-image-display"
                  >
                    <img
                      className="product-image-active"
                      src={mainImage}
                      alt={val.title}
                      loading="lazy"
                    ></img>
                    <div>
                      <img
                        onClick={changePicture}
                        alt={val.title}
                        src={val.images[1]}
                        loading="lazy"
                      ></img>
                      <img
                        onClick={changePicture}
                        alt={val.title}
                        src={val.images[2]}
                        loading="lazy"
                      ></img>
                      <img
                        onClick={changePicture}
                        alt={val.title}
                        src={val.images[3]}
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                  <div className="product-info">
                    <h1>{val.title}</h1>
                    <h3>CA${val.price}</h3>
                    <h3>quantity</h3>
                    <form>
                      <select
                        name="quantity"
                        id="desktop-quantity-selector"
                        className="quantity-selector"
                        onChange={setQuantityDesktop}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </form>

                    <button
                      onClick={addToCart}
                      className="product-info-add-to-cart-button"
                    >
                      ADD TO CART
                    </button>
                    <h3 className="product-info-added-to-cart">
                      {addedToCart}
                    </h3>

                    <p>{val.description}</p>
                    <p>{val.productInfo}</p>
                  </div>
                </div>
                <div className="mobile-product-page">
                  <div
                    id="product-image-active"
                    className="product-image-display-mobile"
                  >
                    <img
                      className="product-image-active-mobile"
                      src={mainImage}
                    ></img>
                    <img onClick={changePicture} src={val.images[1]}></img>
                    <img onClick={changePicture} src={val.images[2]}></img>
                    <img onClick={changePicture} src={val.images[3]}></img>
                  </div>
                  <div className="product-info-mobile">
                    <h1>{val.title}</h1>
                    <h3>CA${val.price}</h3>
                    <div className="mobile-add-to-cart">
                      <form>
                        <select
                          name="quantity"
                          id="mobile-quantity-selector"
                          className="mobile-quantity-selector"
                          onChange={setQuantityMobile}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </form>
                      <button
                        onClick={addToCart}
                        className="product-info-add-to-cart-button"
                      >
                        ADD TO CART
                      </button>
                      <h3 className="product-info-added-to-cart">
                        {addedToCart}
                      </h3>
                    </div>
                    <div className="mobile-product-descriptions">
                      <p>{val.description}</p>
                      <p>{val.productInfo}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {}
      </div>
    </div>
  );
};

export default ProductInfo;
