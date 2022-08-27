import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import { Provider } from 'react-redux';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <Auth0Provider
    domain="dev-n39fdnsb.us.auth0.com"
    clientId="z8GhgSrozmznOlzsM9im1v8gA0tSIBQ0"
    redirectUri={window.location.origin}>
      <Provider
      store={store}>
    <App  />
    </Provider>
    </Auth0Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
