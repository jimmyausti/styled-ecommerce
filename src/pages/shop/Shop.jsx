import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ShopItem } from "./Components/ShopItem";
import { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/ShopContext";


const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  flex-wrap: wrap;
`

const Shop = () => {

  const {result} = useContext(ShopContext);

  const { data, isLoading } = useQuery(["products"], () =>
    axios.get("https://fakestoreapi.com/products").then((res) => res.data)
  );

  return (
    <ProductWrapper>
      {data &&
        data.map((product) => <ShopItem key={product?.id} {...product} result={result}/>)}
        {isLoading && <div>Loading ...</div>}
    </ProductWrapper>
  );
};

export default Shop;