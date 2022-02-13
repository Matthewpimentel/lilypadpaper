import Items from "./Items";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState, useEffect } from "react";
import items from "./Items";
const Cart = (props) => {
  let [cartId, setCartId] = useState([]);
  const id = parseInt(window.id);
  const quantity = parseInt(window.quantity);
  const storedCart = JSON.parse(localStorage.getItem("storedCart"));

  const addId = () => {
    setCartId([
      {
        ...cartId,

        id: id,
        quantity: quantity,
      },
    ]);
  };

  useEffect(() => {
    addId();
    cartId = storedCart;
    console.log(cartId);
    localStorage.clear();
  }, []);

  return (
    <div className="cart">
      <div className="cart-headers">
        <h1 className="blank-margin"></h1>
        <h1>Description</h1>
        <h1>Quantity</h1>
        <h1>Remove</h1>
        <h1>Price</h1>
      </div>

      {Items.map((val) => {
        for (let i = 0; i < cartId.length; i++) {
          if (cartId[i].id == val.id) {
            return (
              <div key={val.id} className="cart-product">
                <img src={val.image}></img>
                <h1>{val.title}</h1>
                <div className="cart-quantity">
                  <div className="cart-plus-div">
                    <AiOutlinePlus className="cart-plus" />
                  </div>
                  <div className="cart-spacer">
                    <h1>{cartId[i].quantity}</h1>
                  </div>
                  <div className="cart-minus-div">
                    <AiOutlineMinus className="cart-minus" />
                  </div>
                </div>
                <h1>Place Holder</h1>
                <h1>{val.price}</h1>
              </div>
            );
          }
        }
      })}

      <h1>{window.id}</h1>

      {/* {Items.map((val) => {
          return (
            <div className="cart-product-info">
              <h1>{val.title}</h1>
              <img src={val.image}></img>
              <h1>dsa</h1>
              <h1>{val.price}</h1>
            </div>
          );
        })} */}
    </div>
  );
};

export default Cart;
