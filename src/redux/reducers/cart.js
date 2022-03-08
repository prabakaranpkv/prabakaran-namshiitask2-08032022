import { UPDATE_CART } from "./../actions/types";

const initialState = {
  items: [],
};

const Cart = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_CART:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};

export default Cart;
