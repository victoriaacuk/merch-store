import dataMerch from "../../data/dataMerch";
import { useDispatch } from "react-redux";
import {removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({cartItem}) => {
    const merches = dataMerch.find(item => item.id === cartItem.merchId);
    const dispatch = useDispatch();
    return(
        <div>
            <p>{merches.name}</p>
            <p>{cartItem.quantity}</p>
            <p>Price: ${merches.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete" /> 
            </span>
        </div>
    )
}

export default CartItem;