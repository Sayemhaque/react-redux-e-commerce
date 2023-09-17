import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products/Products";
import App from "../App";
import Home from "../pages/Home/Home";
import CartPage from "../pages/cart/Cart";
import FavouriteProduct from "../pages/Favourite/FavouriteProduct";
import ProductDetails from "../pages/Products/ProductDetails";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"products",
                element:<Products/>
            },
            {
                path:"cart",
                element:<CartPage/>
            },
            {
                path:"favourite",
                element:<FavouriteProduct/>
            },
            {
                path:"product/:id",
                element:<ProductDetails/>
            }
        ]
    },
])