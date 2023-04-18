import { createContext, useEffect, useReducer } from "react";


const ShopContext = createContext();

const initialItemsState = [];
const initialResultState = [];
const initialState = {
  items: initialItemsState,
  result: initialResultState,
  isClicked: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id } = action.payload;
      return {
        ...state,
        items: [...state.items, action.payload],
        isClicked: { ...state.isClicked, [id]: true },
      };
    case "SET_RESULT":
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (title, image, id, price) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { title, image, price, id },
    });
  };

  const incrementCount = (id) => {
    dispatch({ type: "INCREMENT_COUNT", payload: id });
  };

  const decrementCount = (id) => {
    dispatch({ type: "DECREMENT_COUNT", payload: id });
  };

  useEffect(() => {
    const counts = state.items?.reduce((acc, item) => {
      const key = JSON.stringify(item);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const result = Object.entries(counts).map(([key, count]) => {
      const product = JSON.parse(key);
      return { ...product, count };
    });
    dispatch({ type: "SET_RESULT", payload: result });
  }, [state.items]);

  const value = { ...state, addToCart, incrementCount, decrementCount, dispatch };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};


export { ShopContext };
export default ShopProvider;
