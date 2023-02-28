import { useId } from "react";
import { RemoveFromCartIcon, CartIcon } from "./Icons";
import { useCart } from "../hook/usecart";
import './styles/cart.css'

function CartItem({ thumbnail, price, title,quantity ,addToCart}) {
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>qty: {quantity}</small>
                <button onClick={addToCart} >+</button>
            </footer>

        </li>
    )
}

export function Card() {
    const cardCheckId = useId()
    const { cart, clearCart, addToCart} = useCart()


    return (
        <>
            <label className="cart-button" htmlFor={cardCheckId}>
                <CartIcon />
            </label>
            <input className="hidden"  id={cardCheckId} type="checkbox"/>
            <aside className="cart">
                <ul>
                    {
                        cart.map(product => (
                            <CartItem
                                key={product.id}
                                addToCart={() => (addToCart(product))}
                                {...product}
                            />
                        ))
                    }
                </ul>   
                <div className="center">
                           <button
                    onClick={clearCart}
                ><RemoveFromCartIcon /></button> 
                </div>
        
            </aside>
        </>
    );
}