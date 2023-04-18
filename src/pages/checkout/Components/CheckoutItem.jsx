import React from "react";

const CheckoutItem = (props) => {
  const { image, title, count } = props;



  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>${props?.price}</p>
      <p>Amount: <b>{count}</b></p>
      <button style={{width: '24px'}}>+</button>
      <button style={{width: '24px'}}>-</button>
    </div>
  );
};

export default CheckoutItem;
