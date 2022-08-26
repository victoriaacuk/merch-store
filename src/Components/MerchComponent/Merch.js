import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Merch = ({merch}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    
    return (   
        <div>
            <img src={`${merch.img}.jpg`} className="pic" alt="merch"/>
            <h2>{merch.name}</h2>
            <p>$ {merch.price.toFixed(2)}</p>
            <p>Size: {merch.size}</p>
            <p>Description:{merch.description}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={() => dispatch(addItemToCart({merch, quantity}))}>Add to cart</button>
        </div>
    )
}

export default Merch;