import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import cartSlice from "./feature/cartSlice";
import favProductSlice from "./feature/favProductSlice";
import authSlice from "./feature/api/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { baseApi } from "./feature/api/baseApi";
      
const store = configureStore({
    reducer:
    {
        cartSlice,
        favProductSlice,
        authSlice,
        [baseApi.reducerPath] : baseApi.reducer,
    },
  
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware)
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(logger),
})

export default store;

setupListeners(store.dispatch)