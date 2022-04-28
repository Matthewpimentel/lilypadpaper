import { itemsArray } from "./Items";

import React, { useState, useEffect } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

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

  const setQuantityMobile = () => {
    var e = document.getElementById("mobile-quantity");
    var quantitySelected = parseInt(e.value);
    setQuantity(quantitySelected);
    console.log(quantity);
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
              <div>
                {/* <div className="flex-container" key={i}>
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
                      <div className="cart-quantity">
                        <div
                          className="cart-plus-div"
                          id={val.id}
                          onClick={addToQuantity}
                        >
                          <AiOutlinePlus className="cart-plus" />
                        </div>
                        <div className="cart-spacer">
                          <h1>{quantity}</h1>
                        </div>
                        <div
                          className="cart-minus-div"
                          id={val.id}
                          onClick={subFromQuantity}
                        >
                          <AiOutlineMinus className="cart-minus" />
                        </div>
                      </div>
                    </div>

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
                </div> */}
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
                    <img onClick={changePicture} src={val.images[2]}></img>
                  </div>
                  <div className="product-info-mobile">
                    <h1>{val.title}</h1>
                    <h3>CA${val.price}</h3>
                    <div className="mobile-add-to-cart">
                      <form>
                        <select
                          name="quantity"
                          id="mobile-quantity"
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
