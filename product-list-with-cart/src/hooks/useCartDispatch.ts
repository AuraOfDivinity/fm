import { useContext } from "react";
import { CartDispatcherContext } from "../state/CartDispatcherContext";

export const useCartDispatch = () => {
  const dispatch = useContext(CartDispatcherContext);
  if (!dispatch) {
    throw new Error("dispatch must be used within the CartDispatcherContext");
  }
  return dispatch;
};
