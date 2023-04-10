import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CheckoutItem from "./Components/CheckoutItem";

const Checkout = () => {
  const { items, addToCart } = useContext(ShopContext);

  

  const { data } = useQuery(["products"], () =>
    axios.get("https://fakestoreapi.com/products").then((res) => res.data)
  );


  const filteredData = data?.filter((item) =>
  items.some((cartItem) => cartItem.title === item.title)
);


  console.log(filteredData);

  return (
    <div>
      { 
        filteredData?.map((product) => {
          return (
            <div key={product.id}>
            <CheckoutItem {...product}/>
            </div>
          );
        })}
        {filteredData?.length === 0 && <h1>Nothing is here!</h1>}
    </div>
  );
};

export default Checkout;

