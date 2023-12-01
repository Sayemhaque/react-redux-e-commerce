/* eslint-disable react/prop-types *////

import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return children
      }
    return <Navigate to='/signin'/>
};

export default PrivateRoute;