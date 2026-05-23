import { useReducer } from "react";
import { defaultCartState } from "./data";
import { cartReducer } from "./cartReducer";
import { CartContext } from "./CartContext";
import { CartDispatcherContext } from "./CartDispatcherContext";

const CartStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatcher] = useReducer(cartReducer, defaultCartState);

  return (
    <CartContext.Provider value={cartState}>
      <CartDispatcherContext.Provider value={dispatcher}>
        {children}
      </CartDispatcherContext.Provider>
    </CartContext.Provider>
  );
};

export default CartStateProvider;
