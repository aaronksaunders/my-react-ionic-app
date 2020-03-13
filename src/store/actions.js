
//////////////////////////////
/// ACTIONS
//////////////////////////////
import { json } from "overmind";

  
  // ACTION
  export const showProduct = ({ state }, _value) => {
    state.filter = _value;
  };
  
  // ACTION
  export const addItemToCart = ({ state }, _product) => {
    let p = json(state.products);
    state.cartItems.push({
      id: _product.id,
      ...p.get(_product.id)
    });
  };
  
  // ACTION
  export const removeItemFromCart = ({ state }, index) => {
    state.cartItems.splice(index, 1);
  };
  