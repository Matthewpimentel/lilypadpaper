import Items from "./Items.js";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { useState, useEffect } from "react";

const Cart = () => {
  let divId;

  let cartFromStorage = JSON.parse(localStorage.getItem("cart"));

  const [cartFromStorageState, setCartFromStorageState] =
    useState(cartFromStorage);

  const addToQuantity = (e) => {
    for (let i = 0; i < cartFromStorage.length; i++) {
      if (e.currentTarget.id == cartFromStorageState[i].id) {
        const updateArray = [...cartFromStorageState];
        updateArray[i].quantity += 1;
        setCartFromStorageState(updateArray);
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(updateArray));
      }
    }
  };

  const subtractFromQuantity = (e) => {
    for (let i = 0; i < cartFromStorage.length; i++) {
      if (e.currentTarget.id == cartFromStorageState[i].id) {
        const updateArray = [...cartFromStorageState];
        if (updateArray[i].quantity > 1) {
          updateArray[i].quantity -= 1;
          setCartFromStorageState(updateArray);
          localStorage.clear();
          localStorage.setItem("cart", JSON.stringify(updateArray));
        }
      }
    }
  };

  const removeItem = (e) => {
    for (let i = 0; i < cartFromStorage.length; i++) {
      if (e.currentTarget.id == cartFromStorageState[i].id) {
        const updateArray = [...cartFromStorageState];
        updateArray.splice(i, 1);
        cartFromStorage.splice(i, 1);

        setCartFromStorageState(updateArray);
        localStorage.clear();
        localStorage.setItem("cart", JSON.stringify(updateArray));
      }
    }
  };

  return (
    <div>
      <div className="cart">
        <div className="cart-headers">
          <h1 className="blank-margin"></h1>
          <h1>Description</h1>
          <h1>Quantity</h1>
          <h1>Remove</h1>
          <h1>Price</h1>
        </div>

        {Items.map((val) => {
          if (localStorage.length > 0) {
            for (let i = 0; i < cartFromStorageState.length; i++) {
              if (cartFromStorageState[i].id == val.id) {
                return (
                  <div key={val.id} className="cart-product">
                    <img src={val.image}></img>
                    <h1>{val.title}</h1>
                    <div className="cart-quantity">
                      <div
                        className="cart-plus-div"
                        id={val.id}
                        onClick={addToQuantity}
                      >
                        <AiOutlinePlus className="cart-plus" />
                      </div>
                      <div className="cart-spacer">
                        <h1>{cartFromStorage[i].quantity}</h1>
                      </div>
                      <div
                        className="cart-minus-div"
                        id={val.id}
                        onClick={subtractFromQuantity}
                      >
                        <AiOutlineMinus className="cart-minus" />
                      </div>
                    </div>

                    <FiTrash
                      id={val.id}
                      onClick={removeItem}
                      className="cart-trash"
                      size={40}
                    />

                    <h1>ca${val.price * cartFromStorage[i].quantity}</h1>
                  </div>
                );
              }
            }
          } else {
            return <h1></h1>;
          }
        })}
      </div>
      <form method="POST" action="/create-checkout-session">
        <input
          type="hidden"
          name="cart"
          value={JSON.stringify(cartFromStorage)}
        ></input>
        <input
          type="hidden"
          name="products"
          value={JSON.stringify(Items)}
        ></input>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Cart;
