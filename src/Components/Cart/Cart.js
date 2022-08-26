import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { useState } from "react";
import StripeContainer from "../../Stripe/StripeContainer";






const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const [checkout, setCheckout] = useState(false)
    
    return(
        <div>
        <div>
            <img className="cartIcon" src="https://img.icons8.com/external-fauzidea-gradient-fauzidea/64/000000/external-add-to-cart-e-commerce-fauzidea-gradient-fauzidea-2.png" alt="shop"/> 
            <h3>TOTAL: ${totalPrice.toFixed(2)} </h3>
            {cartItems.map(cartItem => <CartItem cartItem = {cartItem}/>)}                        
    </div>
     {checkout ? <StripeContainer /> : <div>
      <p><button onClick={() => setCheckout(true)}>Proceed to checkout</button></p>
</div>
}
</div>
    )
}

export default Cart;