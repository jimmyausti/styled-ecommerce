import React, { useContext, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";

const CheckoutItem = (props) => {
  const { image, title, count } = props;



  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>${props?.price}</p>
      <p>Amount: <b>{count}</b></p>
    </div>
  );
};

export default CheckoutItem;
