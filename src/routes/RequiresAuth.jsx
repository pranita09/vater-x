import { useData } from "../contexts/DataContext";
import { Navigate } from "react-router-dom";

export const RequiresAuth=({children})=>
{
    const {state:{isLoggedIn}}=useData();
    return isLoggedIn ? (
        children
    ) : (
        <Navigate to="/"/>
    )
}
