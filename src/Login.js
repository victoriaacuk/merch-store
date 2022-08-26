import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import welcome from "./welcome.png";

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return ( 
        !isAuthenticated && (
            <div >
        <img className="pict" src={welcome}  alt="hello"/>
        <p><button className="btn" onClick={() => loginWithRedirect()}>LOG IN</button></p>
        </div>
        )
    )
}

export default Login;