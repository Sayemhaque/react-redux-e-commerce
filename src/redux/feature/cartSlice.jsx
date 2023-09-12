import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cart:[],
        totalPrice:0,
    },
    reducers:{
        addToCart:(state,action) => {
          const data= action.payload;
          const alredyInCart = state.cart.find(product => product.id === data.id)
          if(alredyInCart){
            return;
          }else{
            state.cart.push({...data,quantity:1})
            const totalPrice = state.cart.reduce((accumulator, product) => accumulator + product.price, 0);
            state.totalPrice = totalPrice.toFixed(2);
          }
         
        },
        removeProductFromCart:(state,action) => {
            const productIdToRemove = action.payload;
            const removedProduct = state.cart.find(product => product.id === productIdToRemove)
            if(removedProduct){
                const newTotalPrice = state.totalPrice - removedProduct.price
                state.totalPrice = newTotalPrice.toFixed(2);
            }
           state.cart = state.cart.filter(cart => cart.id !== productIdToRemove)
        },
        increaseQuantity: (state, action) => {
            const  productId  = action.payload;
            const productToUpdate = state.cart.find(product => product.id === productId);
          
            if (productToUpdate) {
              productToUpdate.quantity += 1;
              state.totalPrice = state.cart.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
              }, 0).toFixed(2);
            }
          },
        clearCart:(state) => {
            state.cart = []
        }
    }
})

export const {addToCart,removeProductFromCart,clearCart,increaseQuantity} = cartSlice.actions

export default cartSlice.reducer;

