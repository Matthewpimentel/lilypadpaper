import { itemsArray } from "./Items.js";
import { FiTrash } from "react-icons/fi";
import { useState } from "react";

const Cart = () => {
  let cartFromStorage = JSON.parse(localStorage.getItem("cart"));

  const [cartFromStorageState, setCartFromStorageState] =
    useState(cartFromStorage);

  const saveQuantity = (e) => {
    if(cartFromStorage !== null){
      for (let i = 0; i < cartFromStorage.length; i++) {
        if (e.currentTarget.id == cartFromStorageState[i].id) {
          var div = document.getElementById(e.currentTarget.id);
          var quantitySelected = parseInt(div.value);
          const updateArray = [...cartFromStorageState];
          updateArray[i].quantity = quantitySelected;
          setCartFromStorageState(updateArray);
          localStorage.clear();
          localStorage.setItem("cart", JSON.stringify(updateArray));
        }
      }
    }
  };

  const removeItem = (e) => {
    if(cartFromStorage !== null){
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
    }
  };
  const CartNotEmpty = () => {
    if(cartFromStorage !== null){
      if (cartFromStorage.length > 0) {
        return (
          <div className="cart-headers">
            <h1 className="blank-margin"></h1>
            <h1>Description</h1>
            <h1>Quantity</h1>
            <h1>Remove</h1>
            <h1>Price</h1>
          </div>
        );
      } else {
        return <h1 style={{ textAlign: "center" }}>Cart Is Empty!</h1>;
      }
    }
  };

  return (
    <div className="cart-page">
      <div className="cart">
        <CartNotEmpty></CartNotEmpty>

        {itemsArray.map((val, i) => {
          if(cartFromStorage !== null){
          if (localStorage.length > 0) {
            for (let i = 0; i < cartFromStorageState.length; i++) {
              if (cartFromStorageState[i].id == val.id) {
                return (
                  <div key={val.id} className="cart-product">
                    <img alt={val.title} src={val.images[0]}></img>
                    <h1>{val.title}</h1>
                    <div className="cart-quantity">
                      <form>
                        <select
                          name="quantity"
                          className="quantity-selector"
                          defaultValue={cartFromStorage[i].quantity}
                          onChange={saveQuantity}
                          id={val.id}
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
                    </div>

                    <FiTrash
                      id={val.id}
                      onClick={removeItem}
                      className="cart-trash"
                      size={40}
                    />

                    <h1>ca${(val.price * cartFromStorage[i].quantity).toFixed(2)}</h1>
                  </div>
                );
              } 
            }
          } else {
            return <h1></h1>;
          }
        }})}
      </div>
      <form
        method="POST"
        action="https://lily-pad-paper-backend.herokuapp.com/create-checkout-session"
      >
        <input
          type="hidden"
          name="cart"
          value={JSON.stringify(cartFromStorage)}
        ></input>
        <input
          type="hidden"
          name="products"
          value={JSON.stringify(itemsArray)}
        ></input>
        {cartFromStorage.length > 0 ? (
          <button className="checkout-button" type="submit">
            Checkout
          </button>
        ) : (
          " "
        )}
      </form>
    </div>
  );
};

export default Cart;
