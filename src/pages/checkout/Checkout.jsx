import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CheckoutItem from "./Components/CheckoutItem";


const Checkout = () => {
  const { result, dispatch } = useContext(ShopContext);

  const incrementCount = (id) => {
    dispatch({ type: "INCREMENT_COUNT", payload: id });
  };

  const decrementCount = (id) => {
    dispatch({ type: "DECREMENT_COUNT", payload: id });
  };

  return (
    <div>
      {result.map((product) => {
        return (
          <div key={product.id}>
            <CheckoutItem {...product} incrementCount={() => incrementCount(product.id)} decrementCount={() => decrementCount(product.id)} />
          </div>
        );
      })}
      {result.length === 0 && <h1>Nothing is here!</h1>}
    </div>
  );
};


export default Checkout;
