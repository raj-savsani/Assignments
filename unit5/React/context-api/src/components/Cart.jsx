import React,{useContext} from 'react'
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cart } = useContext(CartContext);
    return (
        <div>
           no. of items in cart: {cart}
        </div>
    )
}

export default Cart;
