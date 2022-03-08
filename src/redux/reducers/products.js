import { GET_PRODUCTLIST } from "../actions/types";

const initialState = {
  productList: [],
};

const Products = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTLIST:
      return {
        ...state,
        productList: payload,
      };
    default:
      return state;
  }
};

export default Products;
