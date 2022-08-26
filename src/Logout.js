import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Main from "./Main";

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div>
            <button  className="btnTwo" onClick={() => logout()}>LOG OUT</button>
            <Main/>
        </div>
        )
    )
}

export default Logout;