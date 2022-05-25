import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PublicRouter = ({children}) => {
    const {user} = useContext(AuthContext);
    return user.logged 
    ?  <Navigate to={process.env.PUBLIC_URL+'/'} /> 
    : children
}
