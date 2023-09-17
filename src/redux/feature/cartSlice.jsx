import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
      //showing toast message
      toast('Added to cart',
        {
          icon: '🛒',
          style: {
            borderRadius: '10px',
            background: '#6B1D9A',
            color: '#fff',
          },
        });
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
      //showing toast message

      state.cart = state.cart.filter((cart) => cart.id !== productIdToRemove);
      toast('removed form cart',
        {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#6B1D9A',
            color: '#fff',
          },
        });

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
        // Decrease the quantity
        if (productToUpdate.quantity > 0) {
          productToUpdate.quantity -= 1;
        }
        // updating the total price of all the products in cart
        state.totalPrice = state.cart
          .reduce(
            (accumulator, product) =>
              accumulator + parseFloat(product.price) * product.quantity,
            0
          )
          .toFixed(2);
      }
      // Remove the product from the cart if its quantity becomes zero
      if (productToUpdate.quantity === 0) {
        state.cart = state.cart.filter((product) => product.id !== productId);
        toast('removed form cart',
          {
            icon: '❌',
            style: {
              borderRadius: '10px',
              background: '#6B1D9A',
              color: '#fff',
            },
          });
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
