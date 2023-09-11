import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products/Products";
import App from "../App";
import Home from "../pages/Home/Home";
import CartPage from "../pages/cart/Cart";

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
            }
        ]
    },
])