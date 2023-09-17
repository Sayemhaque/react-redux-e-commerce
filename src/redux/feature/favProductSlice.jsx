import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';
const favProductSlice = createSlice({
    name: "favouriteProduct",
    initialState: {
        favouriteProduct: [],
    },
    reducers: {
        addToFavourite: (state, action) => {
            const product = action.payload
            state.favouriteProduct.push({ fav: true, ...product })
            toast('Added to favourite',
                {
                    icon: '💖',
                    style: {
                        borderRadius: '10px',
                        background: '#6B1D9A',
                        color: '#fff',
                    },
                }
            );
        },
        removeFavourite: (state, { payload }) => {
            state.favouriteProduct =
                state.favouriteProduct.
                    filter(product => product.id !== payload)
        }
    }
})

export const { addToFavourite, removeFavourite } = favProductSlice.actions;
export default favProductSlice.reducer