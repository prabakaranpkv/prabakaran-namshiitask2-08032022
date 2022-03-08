import { GET_PRODUCTLIST, UPDATE_CART } from "./types";

export function fetchStudentList() {
  return async function (dispatch) {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch({ type: GET_PRODUCTLIST, payload: json }));
  };
}
export function addItemToCart(item) {
  return async function (dispatch, getState) {
    const { items } = getState().cart;
    let newCartItems = [];
    debugger;
    let itemAlreadyExist = false;
    if (items && items.length > 0) {
      newCartItems = items.map((cartItem) => {
        if (cartItem.id === item.id) {
          itemAlreadyExist = true;
          return {
            ...cartItem,
            count: cartItem.count + 1,
          };
        }
        return cartItem;
      });
      if (!itemAlreadyExist) {
        newCartItems.push({
          ...item,
          count: 1,
        });
      }
    } else {
      newCartItems.push({
        ...item,
        count: 1,
      });
    }

    dispatch({ type: UPDATE_CART, payload: newCartItems });
  };
}
