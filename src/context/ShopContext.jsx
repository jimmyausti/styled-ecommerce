import { createContext, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [items, setItems] = useState([]);
  
    const addToCart = (title, image, id, price) => {
        setItems((prevList) => [
          ...prevList,
          { title, image, price, id }
        ]);
      };
  
    const value = { items, setItems, addToCart };
  
    return (
      <ShopContext.Provider value={value}>
        {children}
      </ShopContext.Provider>
    );
  };

export { ShopContext };
export default ShopProvider;