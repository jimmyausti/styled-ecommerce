import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import CheckoutItem from "./Components/CheckoutItem";

const Checkout = () => {
  const { result } = useContext(ShopContext);
  // const [result, setResult] = useState([])

// useEffect(() => {
//     const counts = items.reduce((acc, item) => {
//       const key = JSON.stringify(item);
//       acc[key] = (acc[key] || 0) + 1;
//       return acc;
//     }, {});
//     const result = Object.entries(counts).map(([key, count]) => {
//       const product = JSON.parse(key);
//       return { ...product, count };
//     });
//     setResult(result)
// }, [items])


  return (
    <div>
      {result.map((product) => {
        return (
          <div key={product.id}>
            <CheckoutItem {...product} />
          </div>
        );
      })}
      {result.length === 0 && <h1>Nothing is here!</h1>}
    </div>
  );
};

export default Checkout;
