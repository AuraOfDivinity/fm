import { useContext } from "react";
import { CartContext } from "../state/CartContext";
import type { TCartState } from "../state/data";

export const useCartState = (): TCartState => {
  const state = useContext(CartContext);
  if (!state) {
    throw new Error("useCartState must be used within the CartContexProvider");
  }
  return state;
};
