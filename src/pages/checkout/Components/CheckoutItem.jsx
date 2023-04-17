import React from "react";

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
