import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartid: (state, action) => {
      state.cartId = action.payload;
    },

    addToCart: (state, action) => {
      action.payload.forEach((itemToAdd) => {
        const existingItem = state.products.find(
          (item) => item.id === itemToAdd.id
        );
        if (existingItem) {
          // If item exists, update quantity if different
          if (existingItem.quantity !== itemToAdd.quantity) {
            existingItem.quantity = itemToAdd.quantity;
          }
        } else {
          // If item doesn't exist, add it to the cart
          state.products.push(itemToAdd);
        }
      });
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart,cartid } = cartSlice.actions;

export default cartSlice.reducer;
// addToCart: (state, action) => {

//       const existingItem = state.products.find(
//         (item) => item.id === action.payload?.id
//       );
//       if (existingItem) {
//         // If item exists, update quantity if different
//         if (existingItem.quantity !== action.payload.quantity) {
//           existingItem.quantity = action.payload.quantity;
//         }
//       } else {
//         // If item doesn't exist, add it to the cart
//         state.products.push(action.payload);
//       }
//     },
