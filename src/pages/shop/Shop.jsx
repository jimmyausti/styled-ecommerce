import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ShopItem } from "./Components/ShopItem";
import styled from "styled-components";

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  flex-wrap: wrap;
`

const Shop = () => {
  const { data, isLoading } = useQuery(["products"], () =>
    axios.get("https://fakestoreapi.com/products").then((res) => res.data)
  );



  return (
    <ProductWrapper>
      {data &&
        data.map((product) => <ShopItem key={product?.id} {...product} />)}
        {isLoading && <div>Loading ...</div>}
    </ProductWrapper>
  );
};

export default Shop;
