import blank from "../notepad-blank.png";
import lined from "../notepad-lines.png";
import meal from "../meal.jpg";
import React, { useState, useEffect, useContext } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Shop = () => {
  const [isActive, setActive] = useState("false");
  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const showProductPage = (e) => {
    setActive(!isActive);
    getDivId(e);
  };

  const getDivId = (e) => {
    setId(e.currentTarget.id);
  };

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

  const [items, setItems] = useState([
    {
      id: 1,
      title: "lily notes, lined",
      productNumber: "01",
      image: lined,
      price: 12,
      description:
        "Add a bit of luxury and simplicity to your writing with our Lily Notes Notepad (lined or blank). Keeping all of your thoughts, notes and reminders close by. The perfect size for writing down to do lists, goals, don’t forgets, personal reflection and much more + it makes a very thoughtful gift. ",
      productInfo:
        "50 pages of high quality paper. 4” x 6” Exclusive to Lily Pad Paper & Co.",
    },
    {
      id: 2,
      title: "lily notes, blank",
      productNumber: "02",
      image: blank,
      price: 12,
      description:
        "Add a bit of luxury and simplicity to your writing with our Lily Notes Notepad (lined or blank). Keeping all of your thoughts, notes and reminders close by. The perfect size for writing down to do lists, goals, don’t forgets, personal reflection and much more + it makes a very thoughtful gift. ",
      productInfo:
        "50 pages of high quality paper. 4” x 6” Exclusive to Lily Pad Paper & Co.",
    },
    {
      id: 3,
      title: "weekly meal planner",
      productNumber: "03",
      image: meal,
      price: 16,
      description: "",
      productInfo:
        "25 pages of high quality paper. 5” x 7” Exclusive to Lily Pad Paper & Co.",
    },
  ]);

  return (
    <div>
      <div className={isActive ? "shop" : "hide-shop"}>
        <h1>shop</h1>
        <div className="card">
          {items.map((val) => {
            return (
              <div className="product-container">
                <div
                  className="product-card"
                  id={val.id}
                  onClick={showProductPage}
                  style={{ backgroundImage: `url(${val.image})` }}
                ></div>
                <div className="product-info-blurb">
                  <h1 className="title-product">{val.title}</h1>
                  <h2>CA${val.price}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={isActive ? "hide-product" : "product"}>
        {items.map((val) => {
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
    </div>
  );
};

export default Shop;
