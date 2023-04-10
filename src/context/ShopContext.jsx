import { createContext, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (title, price, image) => {
    setItems((prevList) => [...prevList, { title, price, image }]);
  };

  const value = { items, addToCart };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext };
export default ShopProvider;
