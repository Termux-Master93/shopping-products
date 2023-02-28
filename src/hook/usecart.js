import { useContext } from "react";
import { CartContext } from "../context/Cart";
export  const useCart=()=>{
    const context =useContext(CartContext)
    if(context===undefined){
        throw new Error('Usecart no funciona por que no esta elvuelto en el contexto')

    }
    return context
}