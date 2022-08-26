import './App.css';
import Login from './Login';
import Logout from './Logout';
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";


function App() {
const {isLoading} = useAuth0();
if (isLoading) return <h1>Loading...</h1>
return (
    <div className="App">
      <Login/>
      <Logout/>

      
  </div>
);
}

export default App;