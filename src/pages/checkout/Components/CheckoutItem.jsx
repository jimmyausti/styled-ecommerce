import React from "react";

const CheckoutItem = (props) => {
  const { image, title, count, id, incrementCount, decrementCount } = props;



  return (
    <div>
    <img src={image} alt={title} />
    <p>{title}</p>
    <p>Amount: <b>{count}</b></p>
    <button style={{width: '24px'}} onClick={() => incrementCount(id)}>+</button>
    <button style={{width: '24px'}} onClick={() => decrementCount(id)}>-</button>
  </div>
  );
};

export default CheckoutItem;
