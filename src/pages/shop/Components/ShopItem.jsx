import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ShopContext } from "../../../context/ShopContext";


const ShopItemWrapper = styled.div`
  margin: 2rem 0;
  padding: 0.6rem;
  width: calc((100% / 3));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  text-align: center;
  @media (max-width: 772px) {
     width: calc((100% / 2)); 
  }
  @media (max-width: 570px) {
    width: calc((100% / 1));
  }
`;



export const ShopItem = (props) => {
  const { id, image, title, price } = props;
  const {addToCart} = useContext(ShopContext);
  const [count, setCount] = useState(0);
  



  const handleAddToCart = () => {
    addToCart(title, image, id, price);
    setCount((prevCount) => prevCount + 1);
  };


  return (
    <ShopItemWrapper>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart {count ? `(${count})` : null}</button>
    </ShopItemWrapper>
  );
};