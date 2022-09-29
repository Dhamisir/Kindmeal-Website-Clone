import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function PrivateRoute({children}) {
    const {token}=useContext(AuthContext);
    if(token!=null)
    {
        return <Navigate to="/"/>
    }
    return children;
};
