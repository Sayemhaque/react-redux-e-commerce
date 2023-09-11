import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "./feature/cartSlice";

const store = configureStore({
    reducer:{cartSlice},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
})

export default store;