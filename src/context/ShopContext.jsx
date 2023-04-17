import { createContext, useState, useEffect } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState([]);
  const addToCart = (title, image, id, price) => {
    setItems((prevList) => [...prevList, { title, image, price, id }]);
  };

  
  useEffect(() => {
    const counts = items?.reduce((acc, item) => {
      const key = JSON.stringify(item);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const result = Object.entries(counts).map(([key, count]) => {
      const product = JSON.parse(key);
      return { ...product, count };
    });
    setResult(result);
  }, [items]);
  const value = { items, setItems, addToCart, result, setResult };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export { ShopContext };
export default ShopProvider;
