import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products/Products";
import App from "../App";
import Home from "../pages/Home/Home";
import CartPage from "../pages/cart/Cart";
import FavouriteProduct from "../pages/Favourite/FavouriteProduct";
import ProductDetails from "../pages/Products/ProductDetails";
import Signin from "../pages/signIn/SignIn";
import Signup from "../pages/SignUp/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element:<PrivateRoute><CartPage/></PrivateRoute>
            },
            {
                path:"favourite",
                element:<FavouriteProduct/>
            },
            {
                path:"product/:id",
                element:<ProductDetails/>
            },
            {
                path:"signin",
                element:<Signin/>
            },
            {
                path:"signup",
                element:<Signup/>
            }
        ]
    },
])