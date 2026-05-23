import { createContext } from "react";
import { type TCartState, defaultCartState } from "./data";

export const CartContext = createContext<TCartState>(defaultCartState);
