import { createSlice } from "@reduxjs/toolkit";

const favProductSlice = createSlice({
    name:"favouriteProduct",
    initialState:{
        favouriteProduct:[],
    },
    reducers:{
        addToFavourite:(state,action) => {
            state.favouriteProduct.push(action.payload)
        },
        removeFavourite:(state,{payload}) => {
            state.favouriteProduct = 
            state.favouriteProduct.
            filter(product => product.id !== payload)
        }
    }
})

export const {addToFavourite,removeFavourite} = favProductSlice.actions;
export default favProductSlice.reducer