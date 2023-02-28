import { createContext, useReducer } from "react";
import { cartReducer,cartInitialState } from "../reducers/cart";
export const CartContext = createContext();

function useCartReducer(){
    const [state,dispatch]=useReducer(cartReducer,cartInitialState)

    const addToCart=product=> dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })
    const removeFromCart= product =>dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart= ()=>dispatch({type: 'CLEAR_CART'})

    return {state,addToCart,removeFromCart,clearCart}
}
export function CartProvider({ children }) {
    const {state,addToCart,removeFromCart,clearCart}=useCartReducer()
    //Antigua forma
  /*  const addToCart = product => {

        //chekar si ya existe el producto
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        //validamos que si productInCartIndex es mayor que 0 existe producto repetido
        if (productInCartIndex >= 0) {
            //una forma seria usando estructureClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
        //si producto no esta el el carro
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))

    }*/
   
   /* const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id != product.id))
    }*/

   /* const clearCart = () => {
        setCart([])
    }*/
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
}