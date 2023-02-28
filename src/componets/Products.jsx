import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hook/usecart";
import './Products.css'
export function Products({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className="products">
            <ul>
                {
                    products.slice(0, 50).map(product => {
                        const isProductInCart = checkProductInCart(product)
                        return (
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <strong>{product.title}</strong>
                                </div>
                                <div>
                                    <strong>{product.price}</strong>
                                </div>
                                <div  className="center">
                                    <button
                                        style={{'backgroundColor': isProductInCart ? 'red' : '#09f'}}
                                       
                                        onClick={() => {
                                            isProductInCart
                                                ?
                                                removeFromCart(product)
                                                :
                                                addToCart(product)
                                        }}
                                    >
                                        {
                                            isProductInCart
                                                ?
                                                <RemoveFromCartIcon />
                                                :
                                                <AddToCartIcon/>
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    );
}