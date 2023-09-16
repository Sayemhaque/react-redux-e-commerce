import { createSlice } from "@reduxjs/toolkit";

const favProductSlice = createSlice({
    name:"favouriteProduct",
    initialState:{
        favouriteProduct:[],
    },
    reducers:{
        addToFavourite:(state,action) => {
            const product = action.payload
            state.favouriteProduct.push({fav:true,...product})
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