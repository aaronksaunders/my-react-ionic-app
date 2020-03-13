
import { createHook } from "overmind-react";
import { json } from "overmind";

import * as actions from './actions'

const initalProds = new Map([
  [
    "10-SOCKS",
    {
      name: "blue socks",
      price: 1.99
    }
  ],
  [
    "20-SOCKS",
    {
      name: "red tube socks",
      price: 2.99
    }
  ],
  [
    "30-SOCKS",
    {
      name: "ankle socks",
      price: 1.0
    }
  ],
  [
    "10-SHOES",
    {
      name: "blue suede",
      price: 110.99
    }
  ],
  [
    "20-SHOES",
    {
      name: "red converse all stars",
      price: 72.99
    }
  ],
  [
    "30-SHOES",
    {
      name: "zip up ankle boot",
      price: 89.99
    }
  ]
]);

const state = {
  title: "My App",

  cartItems: [],
  products: new Map(),
  filter: "SHOES",
  /**
   * Derived Value
   */
  filteredProducts: (state, rootState) => {
    let p = json(state.products);
    return p.size !== 0 ? _filterByValue(p, state.filter) : [];
  },
  /**
   * Derived Value
   */
  cartTotal: (state, rootState) => {
    return state.cartItems.reduce((total, item) => {
      return total + item.price;
    }, 0.0);
  },
  /**
   * Derived Value
   */
  cartSize: (state, rootState) => {
    return state.cartItems.length;
  }
};

/**
 *
 * @param {*} products
 * @param {*} filter
 */
const _filterByValue = (products, filter) => {
  let result = [];
  products.forEach((v, k) => {
    if (k.indexOf(filter) !== -1 || filter === "SHOW_ALL") {
      result.push({ ...v, id: k });
    }
  });
  return result;
};

export const onInitialize = ({ state, actions, effects }, instance) => {
  state.products = initalProds;
};

export const config = {
  state,
  actions ,
  onInitialize
};

export const useApp = createHook();
