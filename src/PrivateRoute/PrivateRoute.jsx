/* eslint-disable react/prop-types *////

import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const user = false;
    if (user) {
        return children
      }
    return <Navigate to='/signin'/>
};

export default PrivateRoute;