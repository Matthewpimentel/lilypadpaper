import Items from "./Items";
import React, { useState } from "react";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Cart from "./Cart";
import items from "./Items";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const id = window.value;
  let cartItems = JSON.parse(localStorage.getItem("cart"));
  let cart = [];
  let flag = true;
  let storageFlag = true;

  let itemsLength = items.length;

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
        if (cartItems.length != 0 && cart.length < items.length) {
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
      console.log(cart.length);
      console.log(flag);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cartItems);
    console.log(cart);
  };

  return (
    <div>
      <div className="product">
        {Items.map((val) => {
          if (val.id == id) {
            return (
              <div className="flex-container">
                <img className="img" src={val.image}></img>
                <div className="product-info">
                  <h3>.{val.productNumber}</h3>
                  <h1>{val.title}</h1>
                  <h3>CA${val.price}</h3>
                  <p>tax included</p>
                  <h3>quantity</h3>
                  <div className="quantity">
                    <h1>{quantity}</h1>
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

                  <button onClick={addToCart}>ADD TO CART</button>

                  <p>{val.description}</p>
                  <p>{val.productInfo}</p>
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
