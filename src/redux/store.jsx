import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import cartSlice from "./feature/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { baseApi } from "./feature/api/baseApi";

const store = configureStore({
    reducer:
    {
        cartSlice,
        [baseApi.reducerPath] : baseApi.reducer,
    },
  
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware)
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(logger),
})

export default store;

setupListeners(store.dispatch)