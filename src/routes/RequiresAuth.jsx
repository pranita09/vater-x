import { Navigate } from "react-router-dom";

export const RequiresAuth=({children})=>
{
    const isLoggedIn=localStorage.getItem("isLoggedIn")
    return isLoggedIn ? (
        children
    ) : (
        <Navigate to="/"/>
    )
}
