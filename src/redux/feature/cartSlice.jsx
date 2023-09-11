import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cart:[],
        totalPrice:0,
    },
    reducers:{
        addToCart:(state,action) => {
          const data = action.payload;
          const alredyInCart = state.cart.find(product => product.id === data.id)
          if(alredyInCart){
            return;
          }else{
            state.cart.push(data)
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
        clearCart:(state) => {
            state.cart = []
        }
    }
})

export const {addToCart,removeProductFromCart,clearCart} = cartSlice.actions

export default cartSlice.reducer;

