import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    // addding product to the cart
    addToCart: (state, action) => {
      const data = action.payload;
      //increasing the the quantity of already in cart product
      const alreadyInCart = state.cart.find((product) => product.id === data.id);
      if (alreadyInCart) {
        alreadyInCart.quantity += 1
      }
      else {
        // adding quantity to the product object
        state.cart.push({ ...data, quantity: 1 });
      }
      // updating the total price of all the products in cart
      const totalPrice = state.cart.reduce(
        (accumulator, product) => accumulator + parseFloat(product.price) * parseFloat(product.quantity),
        0
      );
      state.totalPrice = totalPrice.toFixed(2);
    },
    // remove a single product form the cart
    removeProductFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      const removedProduct = state.cart.find(
        (product) => product.id === productIdToRemove
      );
      // 
      if (removedProduct) {
        //updating the totalPrice
        const newTotalPrice = parseFloat(state.totalPrice) - parseFloat(removedProduct.price) * parseFloat(removedProduct.quantity);
        state.totalPrice = newTotalPrice.toFixed(2);
      }
      state.cart = state.cart.filter((cart) => cart.id !== productIdToRemove);
    },

    // increaing the quantity of a single product
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      //finding the product we want to increase quantity
      const productToUpdate = state.cart.find(
        (product) => product.id === productId
      );
      if (productToUpdate) {
        productToUpdate.quantity += 1;
        // updating the total price of all the products in cart
        state.totalPrice = state.cart
          .reduce(
            (accumulator, product) =>
              accumulator + parseFloat(product.price) * product.quantity,
            0
          )
          .toFixed(2);
      }
    },
    // decreaing the quantity of a single product
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      //finding the product we want to decrease quantity
      const productToUpdate = state.cart.find(
        (product) => product.id === productId
      );

      if (productToUpdate) {
        productToUpdate.quantity -= 1;
        // updating the total price of all the products in cart
        state.totalPrice = state.cart
          .reduce(
            (accumulator, product) =>
              accumulator + parseFloat(product.price) * product.quantity,
            0
          )
          .toFixed(2);
      }
    },
    // clearing the whole cart
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
