import React from "react";
import styled from "styled-components";

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
  const { image, title, price } = props;
  return (
    <ShopItemWrapper>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>${price}</p>
    </ShopItemWrapper>
  );
};
