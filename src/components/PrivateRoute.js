import React, { isValidElement } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({isLoggedIn,children})=>{
    //const navigate = useNavigate;
    if(isLoggedIn)
    {
        return children;
    }
    else
    {
        return <Navigate to="/Login"></Navigate>
    }
}

export default PrivateRoute;