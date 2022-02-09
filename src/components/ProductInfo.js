import Items from "./Items";
import React, { useState, useEffect, useContext } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
const ProductInfo = (props) => {
  const [quantity, setQuantity] = useState(1);
  const id = window.value;
  console.log(id);
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
  return (
    <div className="product">
      {Items.map((val) => {
        if (id == val.id)
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
                <button>ADD TO CART</button>
                <p>{val.description}</p>
                <p>{val.productInfo}</p>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default ProductInfo;
