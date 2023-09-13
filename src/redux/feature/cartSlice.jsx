import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      const alreadyInCart = state.cart.find((product) => product.id === data.id);
      if (alreadyInCart) {
        return;
      } else {
        state.cart.push({ ...data, quantity: 1 });
        const totalPrice = state.cart.reduce(
          (accumulator, product) => accumulator + parseFloat(product.price),
          0
        );
        state.totalPrice = totalPrice.toFixed(2);
      }
    },
    removeProductFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      const removedProduct = state.cart.find(
        (product) => product.id === productIdToRemove
      );
      if (removedProduct) {
        const newTotalPrice = parseFloat(state.totalPrice) - parseFloat(removedProduct.price);
        state.totalPrice = newTotalPrice.toFixed(2);
      }
      state.cart = state.cart.filter((cart) => cart.id !== productIdToRemove);
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const productToUpdate = state.cart.find(
        (product) => product.id === productId
      );

      if (productToUpdate) {
        productToUpdate.quantity += 1;
        state.totalPrice = state.cart
          .reduce(
            (accumulator, product) =>
              accumulator + parseFloat(product.price) * product.quantity,
            0
          )
          .toFixed(2);
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const productToUpdate = state.cart.find(
        (product) => product.id === productId
      );

      if (productToUpdate) {
        productToUpdate.quantity -= 1;
        state.totalPrice = state.cart
          .reduce(
            (accumulator, product) =>
              accumulator + parseFloat(product.price) * product.quantity,
            0
          )
          .toFixed(2);
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeProductFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
