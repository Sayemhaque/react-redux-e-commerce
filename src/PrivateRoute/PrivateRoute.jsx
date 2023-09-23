/* eslint-disable react/prop-types *////
import { RedirectToSignIn, useUser } from "@clerk/clerk-react";

const PrivateRoute = ({children}) => {
    const {  isSignedIn} = useUser();
    if (isSignedIn) {
        return children
      }
    return <RedirectToSignIn/>
};

export default PrivateRoute;