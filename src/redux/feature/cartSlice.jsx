import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const products = localStorage.getItem("cart") !== null ? 
                 JSON.parse(localStorage.getItem("cart")) : []
                 console.log(products)
const totalAmount = localStorage.getItem("totalAmout") !== null ? 
                    JSON.parse(localStorage.getItem("totalAmount")) : 0;
const totalQuantity = localStorage.getItem("totalQuantity") !== null ?
                      JSON.parse(localStorage.getItem("totalQuantity")) : 0 
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: products,
    totalAmount:totalAmount,
    totalQuantity:totalQuantity
  },
  reducers: {
    // addding product to the cart
    addToCart: (state, action) => {
      const data = action.payload;
      console.log(data)
      const alredyInCart = state.cart.find(product => product.id === data.id)
      console.log(alredyInCart)
      if(!alredyInCart){
        state.cart.push({...data,quantity:1,totalPrice:data.price})
      }else{
        alredyInCart.quantity++
        alredyInCart.totalPrice = alredyInCart.quantity * alredyInCart.price
      }
        localStorage.setItem("cart",JSON.stringify(state.cart.map(product => product)))
      
       
      //set cart items
 
    },
    // remove a single product form the cart
    removeProductFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      const removedProduct = state.cart.find(
        (product) => product._id === productIdToRemove
      );
      // 
      if (removedProduct) {
        //updating the totalPrice
        const newTotalPrice = parseFloat(state.totalPrice) - parseFloat(removedProduct.price) * parseFloat(removedProduct.quantity);
        state.totalPrice = newTotalPrice.toFixed(2);
      }
      //showing toast message

      state.cart = state.cart.filter((cart) => cart._id !== productIdToRemove);
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
        (product) => product._id === productId
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
        (product) => product._id === productId
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
        state.cart = state.cart.filter((product) => product._id !== productId);
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
