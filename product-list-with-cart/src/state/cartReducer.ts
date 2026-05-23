import type { TCartState } from "./data";

export type TAction =
  | { type: "ADD"; id: number }
  | { type: "REMOVE"; id: number }
  | { type: "RESET" };

export const cartReducer = (state: TCartState, action: TAction): TCartState => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        productData: state.productData.map((product) => {
          if (product.id == action.id) {
            return {
              ...product,
              cartQuantity: product.cartQuantity + 1,
            };
          } else {
            return product;
          }
        }),
      };
    case "REMOVE":
      return {
        ...state,
        productData: state.productData.map((product) => {
          if (product.id == action.id) {
            return {
              ...product,
              cartQuantity: product.cartQuantity - 1,
            };
          } else {
            return product;
          }
        }),
      };
    case "RESET":
      return {
        ...state,
        productData: state.productData.map((product) => {
          return { ...product, cartQuantity: 0 };
        }),
      };
      break;
    default:
      return state;
  }
};
