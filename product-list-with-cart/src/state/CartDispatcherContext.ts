import { createContext } from "react";
import type { TAction } from "./cartReducer";

export const CartDispatcherContext =
  createContext<React.Dispatch<TAction> | null>(null);
