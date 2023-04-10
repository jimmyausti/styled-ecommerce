import React from "react";

const CheckoutItem = (props) => {
  const { image, title, price } = props;
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>${price}</p>
    </div>
  );
};

export default CheckoutItem;
