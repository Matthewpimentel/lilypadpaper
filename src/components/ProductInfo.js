import { itemsArray } from "./Items";

import React, { useState, useEffect } from "react";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ProductInfo = () => {
  const id = window.value;
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(itemsArray[id].images[0]);
  const [addedToCart, setAddedTocart] = useState("");
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  let cart = [];
  let flag = true;

  const addToQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const subFromQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    if (cartItems != undefined) {
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems.length != 0 && cart.length < itemsArray.length) {
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

  function readMore() {
    var x = document.getElementById("shipping-blurb");
    var y = document.getElementById("shipping-info-button");
    var z = document.getElementById("shipping-info-readless");

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }

    if (z.style.display === "block") {
      z.style.display = "none";
    } else {
      z.style.display = "block";
    }
  }

  return (
    <div className="product-info-page">
      <div className="product">
        {itemsArray.map((val, i) => {
          if (val.id == id) {
            return (
              <div className="flex-container" key={i}>
                <div
                  id="product-image-active"
                  className="product-image-display"
                >
                  <img className="product-image-active" src={mainImage}></img>
                  <img onClick={changePicture} src={val.images[1]}></img>
                  <img onClick={changePicture} src={val.images[2]}></img>
                  <img onClick={changePicture} src={val.images[2]}></img>
                </div>
                <div className="product-info">
                  <h1>{val.title}</h1>
                  <h3>CA${val.price}</h3>
                  <h3>quantity</h3>
                  <div className="quantity">
                    <div className="quantity-number">
                      <h1>{quantity}</h1>
                    </div>
                    <div className="quantity-flex-container">
                      <FaArrowUp
                        size={10}
                        className="up"
                        onClick={addToQuantity}
                      />
                      <FaArrowDown
                        size={10}
                        className="down"
                        onClick={subFromQuantity}
                      />
                    </div>
                  </div>

                  <button
                    onClick={addToCart}
                    className="product-info-add-to-cart-button"
                  >
                    ADD TO CART
                  </button>
                  <h3 className="product-info-added-to-cart">{addedToCart}</h3>

                  <p>{val.description}</p>
                  <p>{val.productInfo}</p>
                  <div>
                    <p
                      className="shipping-info"
                      id="shipping-info-button"
                      onClick={readMore}
                    >
                      Shipping Info
                    </p>
                    <div className="shipping-blurb" id="shipping-blurb">
                      <ul>
                        <li>
                          Orders placed for delivery within Canada are shipped
                          via Canada Post.
                        </li>
                        <li>
                          Free standard shipping Canadian shipping for orders
                          $25+
                        </li>
                        <li>
                          Lily Pad Paper & Co. is not liable for lost or stolen
                          packages.
                        </li>
                        <li>
                          We are currently not offering shipping to the U.S.
                        </li>
                      </ul>
                      <p
                        className="shipping-info-readless"
                        id="shipping-info-readless"
                        onClick={readMore}
                      >
                        Show less
                      </p>
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
