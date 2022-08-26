import { configureStore } from '@reduxjs/toolkit';
import merches from "./merchSlice";
import cart from './cartSlice';


export const store = configureStore({
    reducer: {
        merches, 
        cart
    }
})